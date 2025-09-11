import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import { useAuth } from "../context/authContext";

const Hero = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="bg-gray-900 text-white py-8">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Left Side Content */}
        <div className="md:grid-cols-2 lg:gap-8 lg:grid-cols-12">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Swift Chat: Instant Connections, Effortless Conversations
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
           Connect seamlessly and chat effortlessly! Elevate your communication
            experience with our intuitive chat application.
          </p>

          {/* If not logged in, show Login/Register */}
          {!isAuthenticated && (
            <>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
              >
                Login
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 
                    010 1.414l-6 6a1 1 0 
                    01-1.414-1.414L14.586 
                    11H3a1 1 0 
                    110-2h11.586l-4.293-4.293a1 
                    1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>

              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-300"
              >
                Register
              </Link>
            </>
          )}

          {/* If logged in, show Chat Home */}
          {isAuthenticated && (
            <Link
              to="/chathome"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-500"
            >
              Chat Home
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 
                  011.414 0l6 6a1 1 0 
                  010 1.414l-6 6a1 1 0 
                  01-1.414-1.414L14.586 
                  11H3a1 1 0 
                  110-2h11.586l-4.293-4.293a1 
                  1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          )}
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
          <img
            src={hero}
            alt="App mockup"
            className=" w-1/2 h-1/2 mix-blend-screen drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
