import React from "react";
import Avatar from "./Avatar";

const Contact = ({
  userId,
  username,
  selectedUserId,
  setSelectedUserId,
  isOnline,
  avatarLink,
}) => {
  return (
    <li
      key={userId}
      onClick={() => {
        setSelectedUserId(userId);
        console.log(userId);
      }}
      className={`cursor-pointer flex items-center gap-3 capitalize py-2 lg:py-3 px-2 lg:px-5 rounded-[1.3rem] transition-colors ${
        selectedUserId === userId ? "bg-primary text-white" : "hover:bg-gray-200"
      }`}
    >
      <Avatar
        userId={userId}
        username={username}
        isOnline={isOnline}
        avatarLink={avatarLink}
      />
      <div className="flex flex-col">
        <span className="text-xs lg:text-base">{username}</span>
        {isOnline && (
          <span className="text-[10px] lg:text-xs rounded-full bg-green-500 text-white px-2 py-0.5">
            Active
          </span>
        )}
      </div>
    </li>
  );
};

export default Contact;

