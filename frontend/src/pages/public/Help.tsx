import {
  FiHelpCircle,
  FiSearch,
  FiBookOpen,
  FiMessageCircle,
  FiShield,
  FiHome,
  FiUser,
  FiCreditCard,
  FiChevronRight,
} from "react-icons/fi";

const Help = () => {
  const topics = [
    {
      icon: FiHome,
      title: "Properties & Listings",
      description: "Learn how to list, manage and update your properties.",
    },
    {
      icon: FiUser,
      title: "Account & Profile",
      description: "Manage your profile, account settings and preferences.",
    },
    {
      icon: FiShield,
      title: "Safety & Verification",
      description: "Learn about property verification and staying safe.",
    },
    {
      icon: FiCreditCard,
      title: "Payments",
      description: "Get help with payments, transactions and billing.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-green-600 px-5 py-14 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <FiHelpCircle size={30} />
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl">
            How can we help?
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm text-green-100 sm:text-base">
            Find answers, learn how QuickStay works, or get in touch with our
            support team.
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 flex max-w-2xl items-center rounded-xl bg-white px-4 py-3 shadow-lg">
            <FiSearch className="text-gray-400" size={20} />

            <input
              type="text"
              placeholder="Search for help..."
              className="ml-3 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-5 py-10">
        {/* Topics */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Browse help topics
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Find useful information about using GreenSpringHomes.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <button
                  key={topic.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-4 font-semibold text-gray-900">
                    {topic.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {topic.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-green-600">
                    Learn more
                    <FiChevronRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick help */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900">
            Quick help
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <button className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <FiBookOpen size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Getting started
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Learn the basics of using GreenSpringHomes.
                  </p>
                </div>
              </div>

              <FiChevronRight className="text-gray-400" />
            </button>

            <button className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <FiMessageCircle size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Contact support
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Can't find what you're looking for?
                  </p>
                </div>
              </div>

              <FiChevronRight className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Contact Support */}
        <section className="mt-12 rounded-2xl bg-white p-6 text-center shadow-sm sm:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
            <FiMessageCircle size={22} />
          </div>

          <h2 className="mt-4 text-xl font-semibold text-gray-900">
            Still need help?
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-500">
            Our support team is here to help you with any questions or
            problems you may have while using QuickStay.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700">
            <FiMessageCircle size={18} />
            Contact Support
          </button>
        </section>
      </main>
    </div>
  );
};

export default Help;