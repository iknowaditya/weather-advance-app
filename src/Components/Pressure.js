import React from "react";

export default function Pressure({ weather }) {
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
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
          <path d="M16 14v6" />
          <path d="M8 14v6" />
          <path d="M12 16v6" />
        </svg>
        <div className="mt-2">PRESSURE</div>
        <div className="text-2xl font-semibold">{weather.pressure} hPa</div>
        <div className="text-sm">in last 24h</div>
      </div>
    </>
  );
}
