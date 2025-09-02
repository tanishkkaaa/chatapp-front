import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Chat/Nav";
import { useProfile } from "../context/profileContext";
import SelectAvatar from "./SelectAvatar";

const Profile = () => {
  const { userDetails } = useProfile();
  const [formData, setFormData] = useState({});
  const [selectedLink, setSelectedLink] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("/api/user/profile/update", {
        ...formData,
        avatarLink: selectedLink,
      });
      console.log("Profile updated:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Pre-fill form with user details
  useEffect(() => {
    if (userDetails) {
      setFormData(userDetails);
      setSelectedLink(userDetails.avatarLink || "");
    }
  }, [userDetails]);

  return (
    <div className="flex h-full min-h-screen bg-background">
      <Nav />
      <div className="bg-background w-[91%] flex items-center">
        <div className="max-w-xl mx-auto p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Update Profile
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="border text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 bg-gray-800 border-gray-700 placeholder-gray-400 text-white"
                  value={formData?.firstName || ""}
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="border text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 bg-gray-800 border-gray-700 placeholder-gray-400 text-white"
                  value={formData?.lastName || ""}
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  disabled
                  className="border text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 bg-gray-800 border-gray-700 placeholder-gray-400 text-gray-400"
                  value={userDetails?.email || ""}
                  placeholder="Email"
                />
              </div>
            </div>

            {/* Avatar Selection */}
            <SelectAvatar
              setSelectedLink={setSelectedLink}
              selectedLink={selectedLink}
            />

            {/* Submit Button */}
            <div className="flex items-center space-x-4 mt-6">
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Profile;
