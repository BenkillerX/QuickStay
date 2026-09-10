import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from "../../context/useAuth";
import axios from "axios";

const ServiceProviderOnboarding = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();

  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!service || !description || !experience || !location) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      await api.post("/api/onboarding/service-provider", {
        service,
        description,
        experience,
        location,
      });

      // Refresh the logged-in user's data
      // so onboardingCompleted becomes true
      const response = await api.get("/api/auth/me");

      setCurrentUser(response.data.user);

      navigate("/service-provider/");
    } catch (error: unknown) {
  console.error("Service provider onboarding error:", error);

  if (axios.isAxiosError(error)) {
    setError(
      error.response?.data?.message ||
        "Something went wrong while completing onboarding."
    );
  } else {
    setError("Something went wrong while completing onboarding.");
  }
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Complete your profile
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Tell us a little about the service you provide so customers can
            find and understand what you offer.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              What service do you provide?
            </label>

            <input
              id="service"
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              placeholder="e.g. Plumbing, Web Development, Electrical Repairs"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Describe your service
            </label>

            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell customers what you do and what they can expect..."
              rows={5}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none resize-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Experience */}
          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Years of experience
            </label>

            <input
              id="experience"
              type="number"
              min="0"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="e.g. 3"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Location
            </label>

            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Ikeja, Lagos"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-xl
              bg-green-600
              px-4
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-green-700
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading ? "Completing profile..." : "Complete Profile"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ServiceProviderOnboarding;
