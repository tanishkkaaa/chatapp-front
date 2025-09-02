import React, { useState } from "react";
import Contact from "./Contact";

const OnlineUsersList = ({
  onlinePeople,
  offlinePeople,
  selectedUserId,
  setSelectedUserId,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Filter Online Users
  const filteredOnlinePeople = Object.keys(onlinePeople).filter((userId) => {
    const username = onlinePeople[userId]?.username || "";
    return username.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // 🔍 Filter Offline Users
  const filteredOfflinePeople = Object.keys(offlinePeople).filter((userId) => {
    const { firstName = "", lastName = "" } = offlinePeople[userId] || {};
    const fullName = `${firstName} ${lastName}`.trim();
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section className="w-[29%] py-3 border-r px-2 lg:px-4 border-gray-700">
      {/* Search Bar */}
      <div className="text-white flex items-center gap-2 p-1 px-3 mb-3 bg-gray-800 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hidden sm:block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent outline-none text-white placeholder-gray-400"
        />
      </div>

      {/* User List */}
      <div className="max-h-[85vh] overflow-auto no-scrollbar flex flex-col gap-2">
        {/* 🟢 Online Users */}
        {filteredOnlinePeople.map((userId) => {
          const { username, avatarLink } = onlinePeople[userId] || {};
          return (
            <Contact
              key={userId}
              userId={userId}
              username={username}
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
              isOnline={true}
              avatarLink={avatarLink}
            />
          );
        })}

        {/* 🔴 Offline Users */}
        {filteredOfflinePeople.map((userId) => {
          const { _id, firstName, lastName, avatarLink } =
            offlinePeople[userId] || {};
          return (
            <Contact
              key={_id || userId}
              userId={_id || userId}
              username={`${firstName} ${lastName}`.trim()}
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
              isOnline={false}
              avatarLink={avatarLink}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OnlineUsersList;
