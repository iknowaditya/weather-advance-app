import React from "react";

function Sunset({ weather }) {
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
          <path d="M12 10V2" />
          <path d="m4.93 10.93 1.41 1.41" />
          <path d="M2 18h2" />
          <path d="M20 18h2" />
          <path d="m19.07 10.93-1.41 1.41" />
          <path d="M22 22H2" />
          <path d="m16 6-4 4-4-4" />
          <path d="M16 18a4 4 0 0 0-8 0" />
        </svg>
        <div className="mt-2">SUNSET</div>
        {weather.sunset && typeof weather.sunset === "number" ? (
          <div className="text-2xl font-semibold">
            {new Date(weather.sunset * 1000).toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </div>
        ) : (
          <div className="text-red-500">Sunset data not available</div>
        )}

        <div className="text-sm">
          Sunrise:
          {weather.sunrise && typeof weather.sunrise === "number" ? (
            <div className="">
              {new Date(weather.sunrise * 1000).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </div>
          ) : (
            <div className="text-red-500">Sunrise data not available</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Sunset;
