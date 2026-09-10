import { createContext } from "react";

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  role: "tenant" | "propertyOwner" | "serviceProvider" | "admin";
  onboardingCompleted: boolean;
}

export interface AuthContextType {
  currentUser: User | null;

  setCurrentUser: React.Dispatch<
    React.SetStateAction<User | null>
  >;

  login: (
    email: string,
    password: string
  ) => Promise<User>;

  register: (
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) => Promise<User>;

  registerOwner: (
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) => Promise<User>;

  registerServiceProvider: (
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) => Promise<User>;

  logout: () => void;
  loading: boolean;
}

export const AuthContext =
  createContext<AuthContextType | null>(null);