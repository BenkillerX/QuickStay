import { useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import axios from "axios"

const Tenant = () => {
  type BackendError = {
  msg: string;
};

type ErrorResponse = {
  message?: string;
  errors?: BackendError[];
};

    const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
const [errors, setErrors] = useState<string[]>([]);
  async function register(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const response = await api.post("/api/auth/register/tenant", {
       firstname,
      lastname,
      email,
      password,
    });
    const data = response.data;
    console.log(data);
    }catch (error) {
  if (axios.isAxiosError<ErrorResponse>(error)) {
    const backendErrors = error.response?.data?.errors;

    if (backendErrors) {
      setErrors(backendErrors.map((error) => error.msg));
    } else {
      setErrors([
        error.response?.data?.message || "Something went wrong.",
      ]);
    }
  }
}
}

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Create Your Account
        </h1>

        <p className="text-base sm:text-lg text-gray-500 mt-2">
         Sign Up to get started
        </p>
      </div>

      {/* Signup Card */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-8">
        {errors.length > 0 && (
  <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4">
    {errors.map((error, index) => (
      <p key={index} className="text-sm text-red-600">
        {error}
      </p>
    ))}
  </div>
)}


        {/* Google Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          {/* Google Logo */}
          <svg
            className="w-5 h-5"
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
        <div className="flex items-center gap-4 my-6">
          <div className="h-px flex-1 bg-gray-200"></div>

          <span className="text-sm text-gray-400">or</span>

          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={register}>
          {/* Firstname */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstname"
              className="text-sm font-medium text-gray-700"
            >
              Firstname
            </label>

            <input
              id="firstname"
              type="text"
              value={firstname}
              onChange={(e)=>setFirstname(e.target.value)}
              placeholder="Albert.."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 placeholder:text-gray-400"
            />
          </div>
          {/* Lastname */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastname"
              className="text-sm font-medium text-gray-700"
            >
              Lastname
            </label>

            <input
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e)=>setLastname(e.target.value)}
              placeholder="Eistien..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 placeholder:text-gray-400"
            />
          </div>
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
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="you@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 placeholder:text-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <button
                type="button"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Forgot password?
              </button>
            </div>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 placeholder:text-gray-400"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-400 active:bg-gray-950 transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/register"
            type="button"
            className="font-medium text-orange-500 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Tenant