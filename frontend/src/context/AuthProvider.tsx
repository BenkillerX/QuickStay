import { useEffect, useState } from "react";
import api from "../services/api";
import { AuthContext, type User } from "./AuthContext";

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore logged-in user when the app is refreshed
  useEffect(() => {
    const restoreUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await api.get("/api/auth/me");

        const user = response.data.user;

        setCurrentUser(user);
      } catch (error) {
        console.error("Failed to restore user:", error);

        // Token is no longer valid
        localStorage.removeItem("token");
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreUser();
  }, []);

  // Login existing user
  const login = async (
    email: string,
    password: string
  ): Promise<User> => {
    const response = await api.post("/api/auth/login", {
      email,
      password,
    });

    const token = response.data.token;

    localStorage.setItem("token", token);

    const userResponse = await api.get("/api/auth/me");

    const user = userResponse.data.user;

    setCurrentUser(user);

    return user;
  };

  // Register tenant
  // Tenant must verify email before becoming authenticated.
  const register = async (
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Promise<{ email: string }> => {
    const response = await api.post("/api/auth/register/tenant", {
      firstname,
      lastname,
      email,
      password,
    });

    return {
      email: response.data.email,
    };
  };

  // Register property owner
  const registerOwner = async (
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Promise<User> => {
    const response = await api.post(
      "/api/auth/register/property-owner",
      {
        firstname,
        lastname,
        email,
        password,
      }
    );

    const token = response.data.token;

    localStorage.setItem("token", token);

    const userResponse = await api.get("/api/auth/me");

    const user = userResponse.data.user;

    setCurrentUser(user);

    return user;
  };

  // Register service provider
  const registerServiceProvider = async (
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Promise<User> => {
    const response = await api.post(
      "/api/auth/register/service-provider",
      {
        firstname,
        lastname,
        email,
        password,
      }
    );

    const token = response.data.token;

    localStorage.setItem("token", token);

    const userResponse = await api.get("/api/auth/me");

    const user = userResponse.data.user;

    setCurrentUser(user);

    return user;
  };

const verifyEmail = async (
  email: string,
  code: string
) => {
  const response = await api.post("/api/auth/verify-email", {
    email,
    code,
  });

  return response.data;
};


  const logout = (): void => {
    setCurrentUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        login,
        register,
        registerOwner,
        registerServiceProvider,
        verifyEmail,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};