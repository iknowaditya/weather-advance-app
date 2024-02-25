import React from "react";

export default function Visibility({ weather }) {
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
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <div className="mt-2">VISIBILITY</div>
        <div className="flex">
          <div className="text-2xl font-semibold">{weather.visibility}</div>
          <div className="text-sm">Mi</div>
        </div>
      </div>
    </>
  );
}
