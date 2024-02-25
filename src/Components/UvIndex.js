import React from "react";

function UvIndex() {
  return (
    <>
      <div className="bg-[#424769] p-4 rounded-lg">
        <div className="flex items-center gap-2">
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
            <circle cx="12" cy="12" r="4" />
            <path d="M12 4h.01" />
            <path d="M20 12h.01" />
            <path d="M12 20h.01" />
            <path d="M4 12h.01" />
            <path d="M17.657 6.343h.01" />
            <path d="M17.657 17.657h.01" />
            <path d="M6.343 17.657h.01" />
            <path d="M6.343 6.343h.01" />
          </svg>
          <h2 className="text-xl font-medium">UV INDEX</h2>
        </div>
        <div className="text-2xl font-semibold">3</div>
        <div className="text-sm">Moderate</div>
        <div className="mt-1 w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-[#F6B17A] h-2.5 rounded-full"
            style={{
              width: "30%",
            }}
          />
        </div>
        <div className="text-xs mt-1">Use sun protection until 16:00</div>
      </div>
    </>
  );
}

export default UvIndex;
