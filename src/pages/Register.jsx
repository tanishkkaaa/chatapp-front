import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/user/register";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
      toast.success(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 300 &&
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
            Create an account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            action="#"
            onSubmit={handleSubmit}
          >
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

            {/* First & Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  First Name
                </label>
                <input
                  onChange={handleChange}
                  value={data.firstName}
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Tanishka"
                  className="w-full border sm:text-sm rounded-lg p-2.5 bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Last Name
                </label>
                <input
                  onChange={handleChange}
                  value={data.lastName}
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Rajput"
                  className="w-full border sm:text-sm rounded-lg p-2.5 bg-gray-700 text-white"
                  required
                />
              </div>
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

            {/* Terms Checkbox */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border rounded focus:ring-3 bg-gray-700"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-gray-300">
                  I accept the{" "}
                  <a
                    className="font-medium text-indigo-400 hover:underline"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create an account
            </button>

            {/* Login Link */}
            <p className="text-sm font-light text-gray-400">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-medium text-indigo-400 hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
