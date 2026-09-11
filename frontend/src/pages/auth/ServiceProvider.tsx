import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const ServiceProvider = () => {
    const {registerServiceProvider} = useAuth()
  const navigate = useNavigate()

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
  const [loading, setLoading] = useState<boolean>(false)
    async function register(e:React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      try {
        setLoading(true)
        const user = await registerServiceProvider(
            firstname,
            lastname,
            email,
            password
         )
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
        navigate("/provider/onboarding");
      } else {
        navigate("/provider/");
      }
    } else if (user.role === "admin") {
      navigate("/admin/");
    }
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
  }finally{
    setLoading(false)
  }
  }
  
  return (
   <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
  <div className="w-full max-w-6xl bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
    <div className="grid lg:grid-cols-2">

      {/* =========================
          LEFT — SIGN UP FORM
      ========================== */}
      <div className="px-6 py-8 sm:px-10 lg:px-14 lg:py-12">

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600 mb-4">
            Service Provider
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Create your provider account
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Join QuickStay and connect with people looking for your services.
          </p>
        </div>

        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4">
            <div className="flex gap-3">

              <div className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                !
              </div>

              <div className="space-y-1">
                {errors.map((error, index) => (
                  <p key={index} className="text-sm text-red-600">
                    {error}
                  </p>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* Google Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 active:bg-gray-100 transition"
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
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-xs uppercase tracking-wider text-gray-400">
            or continue with email
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* =========================
            FORM
        ========================== */}
        <form className="space-y-5" onSubmit={register}>

          {/* First + Last Name */}
          <div className="grid sm:grid-cols-2 gap-4">

            {/* Firstname */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="firstname"
                className="text-sm font-medium text-gray-700"
              >
                First name
              </label>

              <input
                id="firstname"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Albert"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10 placeholder:text-gray-400"
              />
            </div>

            {/* Lastname */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="lastname"
                className="text-sm font-medium text-gray-700"
              >
                Last name
              </label>

              <input
                id="lastname"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Eistien"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10 placeholder:text-gray-400"
              />
            </div>

          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10 placeholder:text-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a strong password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10 placeholder:text-gray-400"
            />

            <p className="text-xs text-gray-400">
              Use at least 8 characters for better security.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 active:scale-[0.99] transition-all shadow-sm"
          >
            
            {loading ? "Creating account..." : "Create Provider Account"}
          </button>

        </form>

        {/* Login */}
        <p className="text-center text-sm text-gray-500 mt-7">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-green-600 hover:text-green-700 hover:underline"
          >
            Log in
          </Link>
        </p>

      </div>


      {/* =========================
          RIGHT — PROVIDER INTRO
      ========================== */}
      <div className="relative hidden lg:flex min-h-175 bg-gray-900 overflow-hidden">

        {/* Background Image */}
        <img
          src="/images/Quick4.jpg"
          alt="Service provider working"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14 text-white">

          {/* Top */}
          <div>
            <div className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 text-sm">
              🛠️ Built for service providers
            </div>
          </div>

          {/* Main */}
          <div className="max-w-md">

            <h2 className="text-4xl xl:text-5xl font-semibold leading-tight">
              Grow your service business with QuickStay.
            </h2>

            <p className="mt-5 text-white/80 text-base xl:text-lg leading-relaxed">
              Create your provider account and make your services easier
              to discover. Connect with property owners and tenants who
              need reliable professionals.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-300">
                  ✓
                </div>

                <span className="text-sm text-white/90">
                  Showcase your services to potential customers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-300">
                  ✓
                </div>

                <span className="text-sm text-white/90">
                  Connect with people who need your expertise
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-300">
                  ✓
                </div>

                <span className="text-sm text-white/90">
                  Manage your work from your provider dashboard
                </span>
              </div>

            </div>

          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-white/60 leading-relaxed">
              After creating your account, you'll be guided through the
              next steps to complete your provider profile and tell
              customers what you offer.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default ServiceProvider