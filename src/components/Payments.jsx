import React from "react";

const Payments = () => {
  return (
    <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      {/* Header */}
      <div className="mx-auto max-w-screen-md text-center mb-8">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
          Designed for business teams like yours
        </h2>
        <p className="mb-5 font-light sm:text-xl text-gray-400">
          Here at Swift we focus on markets where technology and capital can
          unlock long-term value and drive economic growth.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 lg:space-y-0">
        {/* Starter Plan */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border shadow">
          <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
          <p className="font-light sm:text-lg text-gray-400">
            Best option for personal use & for your next project
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="text-gray-800">₹1000</span>
            <span className="text-gray-800">/month</span>
          </div>

          <ul role="list" className="text-gray-800 mb-8 space-y-4 text-left">
            {[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 1 developer",
              "Premium support: 6 months",
              "Free updates: Included",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="text-white hover:bg-[#1B57E9] bg-primary px-5 py-2 rounded-lg"
          >
            Get started
          </a>
        </div>

        {/* Company Plan */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border shadow">
          <h3 className="mb-4 text-2xl font-semibold">Company</h3>
          <p className="font-light sm:text-lg text-gray-400">
            Relevant for multiple users, extended & premium support
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="text-gray-800">₹3000</span>
            <span className="text-gray-800">/month</span>
          </div>

          <ul role="list" className="text-gray-800 mb-8 space-y-4 text-left">
            {[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 10 developers",
              "Premium support: 24 months",
              "Free updates: Included",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="text-white hover:bg-[#1B57E9] bg-primary px-5 py-2 rounded-lg"
          >
            Get started
          </a>
        </div>

        {/* Enterprise Plan */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border shadow">
          <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
          <p className="font-light sm:text-lg text-gray-400">
            Best for large scale uses and extended redistribution rights
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="text-gray-800">₹5000</span>
            <span className="text-gray-800">/month</span>
          </div>

          <ul role="list" className=" text-gray-800 mb-8 space-y-4 text-left">
            {[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size: 100+ developers",
              "Premium support: 36 months",
              "Free updates: Included",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="text-white hover:bg-[#1B57E9] bg-primary px-5 py-2 rounded-lg"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

// ✅ Reusable Check Icon
const CheckIcon = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-green-500"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0
         01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586
         l7.293-7.293a1 1 0 011.414 0z"
    />
  </svg>
);

export default Payments;
