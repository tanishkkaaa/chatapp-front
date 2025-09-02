import React from "react";
const TopBar = ({
  setSelectedUserId,
  selectedUserId,
  offlinePeople,
  onlinePeople,
}) => {
  if (!selectedUserId) return null;

  const isOnline = !!onlinePeople[selectedUserId];
  const userData = isOnline
    ? onlinePeople[selectedUserId]
    : offlinePeople[selectedUserId];

  return (
    <div className="absolute right-0 top-0 text-white w-full py-5 px-4 bg-gray-900 flex items-center justify-between shadow-md">
      {/* Back Button */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
        onClick={() => setSelectedUserId(null)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>

      {/* User Info */}
      <div className="flex items-center gap-2">
        <span className="font-medium text-lg">
          {isOnline
            ? userData?.username
            : `${userData?.firstName || ""} ${userData?.lastName || ""}`}
        </span>
        <span
          className={`h-3 w-3 rounded-full ${
            isOnline ? "bg-green-500" : "bg-gray-500"
          }`}
        ></span>
      </div>
    </div>
  );
};
export default TopBar;
