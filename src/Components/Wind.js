import React from "react";
import Compass from "./Compass";

function Wind({ weather, units }) {
  const windUnit = units === "metric" ? "m/s" : "m/h";

  // Ensure weather object is not undefined
  if (!weather) {
    return null;
  }

  const weatherData = {
    deg: weather.deg || 0, // Use 0 as default if deg is not available
    speed: weather.speed || 0, // Use 0 as default if speed is not available
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between  bg-[#424769] p-4 rounded-lg gap-2">
        <div className=" ">
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
            <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
            <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
            <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
          </svg>
          <div className="mt-2">WIND</div>
          <div className="text-2xl font-semibold">
            {weather.speed}
            <span className="text-base">{windUnit}</span>
          </div>
        </div>
        <div className="">
          <Compass weather={weatherData} className="w-24 h-24" />
        </div>
      </div>
    </>
  );
}

export default Wind;
