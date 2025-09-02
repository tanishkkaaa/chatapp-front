import React from "react";

const Features = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        {/* Section Heading */}
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Designed for business teams like yours
          </h2>
          <p className="sm:text-xl text-gray-400">
            At Swift, we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {/* Feature 1 */}
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-600">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 
                  1.293a1 1 0 101.414 1.414L11.414 
                  15H15a2 2 0 002-2V5a2 2 0 
                  00-2-2H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Marketing</h3>
            <p className="text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly across your
              organization and hit your marketing goals every month with a clear
              strategy.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-600">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 
                000 1.84l7 3a1 1 0 00.788 0l7-3a1 1 0 
                000-1.84l-7-3z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Legal</h3>
            <p className="text-gray-400">
              Protect your organization, devices, and stay compliant with
              structured workflows and custom permissions made for teams.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-600">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 
                  013 3v1h2a2 2 0 012 2v9a2 2 
                  0 01-2 2H4a2 2 0 01-2-2V8a2 
                  2 0 012-2h2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Business Automation</h3>
            <p className="text-gray-400">
              Automate tasks, send notifications, and streamline processes with
              templates designed to boost productivity.
            </p>
          </div>

          {/* Feature 4 */}
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-600">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 
                  16zm1-13a1 1 0 
                  112-2 1 1 0 01-2 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Finance</h3>
            <p className="text-gray-400">
              Audit-proof software built for financial teams. Simplify your
              month-end close and quarterly budgeting with ease.
            </p>
          </div>

          {/* Feature 5 */}
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-600">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 
                100-2H7zM4 7a1 1 0 011-1h10a1 
                1 0 110 2H5a1 1 0-1-1z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Enterprise Design</h3>
            <p className="text-gray-400">
              Create beautiful, delightful experiences for your users with real
              cross-company collaboration and design systems.
            </p>
          </div>

          {/* Feature 6 */}
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-indigo-600">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 
                  0a1.532 1.532 0 01-1.118 
                  1.09c-1.52.33-1.52 2.34 
                  0 2.67.54.11.985.46 
                  1.118 1.09.38 1.56 
                  2.6 1.56 2.98 0a1.532 
                  1.532 0 011.118-1.09c1.52-.33 
                  1.52-2.34 0-2.67a1.532 
                  1.532 0 01-1.118-1.09z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Operations</h3>
            <p className="text-gray-400">
              Keep your company running smoothly with customizable workflows
              built for efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
