import React from "react";

function Humidity({ weather }) {
  return (
    <>
      <div className="bg-[#424769] p-4 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400 w-6 h-6"
        >
          <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
        </svg>
        <div className="mt-2">HUMIDITY</div>
        <div className="text-2xl font-semibold">{weather.humidity}%</div>
        <div className="text-sm">The dew point is 25° right now</div>
      </div>
    </>
  );
}

export default Humidity;
