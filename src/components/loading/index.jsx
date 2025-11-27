import React from "react";

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-600"></div>
    </div>
  );
};

export default Loading;
