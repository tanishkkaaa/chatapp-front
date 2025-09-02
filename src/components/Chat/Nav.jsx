import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Nav = () => {
  const { logout, isAuthenticated } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobile(!isMobile)}
        className="flex fixed bottom-5 left-5 h-10 aspect-square lg:hidden bg-gray-800 rounded-full items-center justify-center text-white shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Sidebar Navigation */}
      {isMobile && (
        <header className="fixed top-0 left-0 h-screen w-[180px] bg-gray-900 text-white z-40 flex flex-col p-4 lg:static lg:h-auto lg:w-64">
          {/* Logo */}
          <Link
            to="/"
            className="flex gap-2 items-center justify-center border-b border-gray-700 pb-3"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Swift Logo"
            />
            <span className="font-semibold text-xl">Swift</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-col justify-between flex-grow mt-6">
            <div className="flex flex-col gap-5">
              {/* Profile Link */}
              <Link
                to="/profile"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75H4.5v-.75z"
                  />
                </svg>
                <span>Profile</span>
              </Link>

              {/* Chats Link */}
              <Link
                to="/chathome"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zM15.375 12a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span>Chats</span>
              </Link>
            </div>

            {/* Logout Button */}
            <div className="mt-auto">
              <button
                onClick={logout}
                className="flex items-center gap-2 w-full hover:text-red-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25V9m0 6v3.75A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3h-12m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                Logout
              </button>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Nav;
