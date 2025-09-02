import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { isAuthenticated, setAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/user/login";
      const response = await axios.post(url, data, {
        withCredentials: true,
      });

      if (response.status === 200) {
        toast.success(response.data.message || "Login successful!");
        setAuthenticated(true);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <section className="bg-dark min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg shadow border bg-gray-800 md:mt-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                onChange={handleChange}
                value={data.email}
                type="email"
                name="email"
                id="email"
                className="w-full border sm:text-sm rounded-lg p-2.5 bg-gray-700 text-white"
                placeholder="name@company.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                onChange={handleChange}
                value={data.password}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="w-full border sm:text-sm rounded-lg p-2.5 bg-gray-700 text-white"
                required
              />
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border rounded focus:ring-3 bg-gray-700"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-300">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-indigo-400 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>

            {/* Sign Up Link */}
            <p className="text-sm font-light text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                to={"/register"}
                className="font-medium text-indigo-400 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
