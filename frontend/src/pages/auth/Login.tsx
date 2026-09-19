import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/useAuth";
import {
  FiArrowLeft,
} from "react-icons/fi";
import LoginImageSide from "./LoginImageSide";
import { FiEye, FiEyeOff } from "react-icons/fi";
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false)
 async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setError(null);

  if (!email || !password) {
    setError("Please enter your email and password.");
    return;
  }

  try {
    setLoading(true);

    const user = await login(email, password);

    if (user.role === "tenant") {
      if (!user.onboardingCompleted) {
        navigate("/tenant/onboarding");
      } else {
        navigate("/tenant/");
      }
    } else if (user.role === "propertyOwner") {
      if (!user.onboardingCompleted) {
        navigate("/owner/onboarding");
      } else {
        navigate("/owner/");
      }
    } else if (user.role === "serviceProvider") {
      if (!user.onboardingCompleted) {
        navigate("/service-provider/onboarding");
      } else {
        navigate("/service-provider/");
      }
    } else if (user.role === "admin") {
      navigate("/admin/");
    }

  } catch (error) {
    if (axios.isAxiosError(error)) {
      setError(
        error.response?.data?.message ||
          "Unable to log in. Please check your credentials."
      );
    } else {
      setError("Something went wrong. Please try again.");
    }
  } finally {
    setLoading(false);
  }
}
function toggleEye() {
  setShowPassword((prev) => !prev);
}
  return (
    <section className="min-h-screen w-full bg-gray-50">

  {/* Back to Home */}
  <div className="absolute left-5 top-5 z-20 sm:left-8 sm:top-7">
    <Link
      to="/"
      className="flex items-center text-sm font-medium text-gray-600 transition hover:text-green-600"
    >
      <FiArrowLeft size={18} />
     Back to Green<span className="text-green-500">Spring</span>Homes
    </Link>
  </div>

  <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-16 sm:px-6 md:px-8 lg:px-12">

    {/* ================= FORM SIDE ================= */}
    <div className="flex w-full justify-center md:w-1/2 lg:w-[48%]">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            Welcome Back
          </h1>

          <p className="mt-2 text-base text-gray-500">
            Log in to your QuickStay account
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <svg
                className="mt-0.5 h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M10.29 3.86l-7.1 12.27A2 2 0 004.92 19h14.16a2 2 0 001.73-2.87l-7.1-12.27a2 2 0 00-3.42 0z"
                />
              </svg>

              <p>{error}</p>
            </div>
          )}

          {/* Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-3.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            {/* Your existing Google SVG */}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285F4"
                d="M21.35 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.92v2.43h3.14c1.84-1.69 2.93-4.18 2.93-7.38Z"
              />
              <path
                fill="#34A853"
                d="M12 21.75c2.63 0 4.84-.87 6.45-2.35l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.5A9.75 9.75 0 0 0 12 21.75Z"
              />
              <path
                fill="#FBBC05"
                d="M6.54 13.86A5.86 5.86 0 0 1 6.23 12c0-.64.11-1.26.31-1.86v-2.5H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.36l3.24-2.5Z"
              />
              <path
                fill="#EA4335"
                d="M12 6.11c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.2 14.63 2.25 12 2.25A9.75 9.75 0 0 0 3.3 7.64l3.24 2.5C7.31 7.83 9.46 6.11 12 6.11Z"
              />
            </svg>

            Continue with Google
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm text-gray-400">or</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleLogin}>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded-lg border px-4 py-3 outline-none transition
                  ${
                    error
                      ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
                      : "border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600/10"
                  }
                  placeholder:text-gray-400`}
              />
            </div>

            {/* Password */}
           <div className="relative">
  <input
    id="password"
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className={`w-full rounded-lg border px-4 py-3 pr-12 outline-none transition
      ${
        error
          ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
          : "border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600/10"
      }
      placeholder:text-gray-400`}
  />

  <button
    type="button"
    onClick={toggleEye}
    aria-label={showPassword ? "Hide password" : "Show password"}
    className="absolute right-3 top-1/2 -translate-y-1/2
               p-1.5 text-gray-400 transition
               hover:text-gray-600
               focus:outline-none"
  >
    {showPassword ? (
      <FiEyeOff size={20} />
    ) : (
      <FiEye size={20} />
    )}
  </button>
</div>

            {/* Login */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-green-600 py-3.5 font-medium text-white transition-colors hover:bg-green-700 active:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-green-600 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>


    {/* ================= IMAGE SIDE ================= */}
      <LoginImageSide/>

  </div>
</section>
  );
};

export default Login;