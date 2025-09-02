// components/LayoutWrapper.jsx
import React from "react";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default LayoutWrapper;
