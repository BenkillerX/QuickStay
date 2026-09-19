import { useState } from "react";
import { FiCheckCircle, FiMail, FiRefreshCw } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {verifyEmail} = useAuth()
  const email = location.state?.email || "your email address";
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const maskEmail = (email: string) => {
    if (!email.includes("@")) return email;

    const [name, domain] = email.split("@");

    if (name.length <= 2) {
      return `${name[0]}***@${domain}`;
    }

    return `${name.slice(0, 2)}${"*".repeat(
      Math.max(name.length - 2, 3)
    )}@${domain}`;
  };

 const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (code.length !== 6) return;

  setLoading(true);

  try {
  const verifiedData = await verifyEmail(email, code);
    console.log(verifiedData);
    
    navigate("/tenant/onboarding");
  } catch (error: unknown) {
    console.log(error);
    
  } finally {
    setLoading(false);
  }
};

  const handleResend = async () => {
    setResending(true);

    try {

      console.log("Resending code to:", email);
    } catch (error) {
      console.error(error);
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Brand */}
        

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-8 sm:px-10">
    <div className="flex justify-center mb-8">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-green-700"
          >
            GreenSpringHomes
          </Link>
        </div>
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                <FiMail
                  size={36}
                  className="text-green-600"
                />
              </div>

              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-green-600 border-4 border-white flex items-center justify-center">
                <FiCheckCircle
                  size={15}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Verify your email
            </h1>

            <p className="mt-3 text-sm sm:text-base leading-6 text-gray-500">
              We've sent a 6-digit verification code to
            </p>

            <p className="mt-1 font-medium text-gray-900 break-all">
              {maskEmail(email)}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-7">

            {/* Code input */}
            <div>
              <label
                htmlFor="verification-code"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Verification code
              </label>

              <input
                id="verification-code"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                value={code}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 6);

                  setCode(value);
                }}
                placeholder="Enter 6-digit code"
                className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-center text-lg tracking-[0.35em] font-semibold text-gray-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* Instructions */}
            <div className="mt-4 rounded-xl bg-gray-50 border border-gray-100 p-4">
              <p className="text-sm leading-6 text-gray-600">
                Enter the verification code we sent to your
                email address. The code may expire after a short
                period of time.
              </p>
            </div>

            {/* Verify button */}
            <button
              type="submit"
              disabled={code.length !== 6 || loading}
              className="w-full mt-6 h-12 rounded-xl bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium transition-colors"
            >
              {loading ? "Verifying..." : "Verify email"}
            </button>
          </form>

          {/* Resend */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Didn't receive the code?
            </p>

            <button
              type="button"
              onClick={handleResend}
              disabled={resending}
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 disabled:text-gray-400 transition-colors"
            >
              <FiRefreshCw
                size={15}
                className={resending ? "animate-spin" : ""}
              />

              {resending
                ? "Sending code..."
                : "Resend verification code"}
            </button>
          </div>

          {/* Change email */}
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <Link
              to="/register"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Use a different email address
            </Link>
          </div>
        </div>

        {/* Security note */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Never share your verification code with anyone.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
// ```

// ### Your flow is now

// ```text
// Register
//    ↓
// POST /api/auth/register/tenant
//    ↓
// Backend creates tenant
//    ↓
// Backend generates 6-digit code
//    ↓
// Code sent to email
//    ↓
// /verify-email
//    ↓
// User enters code
//    ↓
// POST /api/auth/verify-email
//    ↓
// Email verified
//    ↓
// Login
//    ↓
// Check role + onboardingCompleted
// ```

// One thing I'd **not** do yet is put `navigate("/login")` into the component until we see your actual verification endpoint and response. Once you show me your **backend verification controller/route**, we can wire this UI directly to it instead of guessing the API structure.
