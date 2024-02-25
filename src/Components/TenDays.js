import React from "react";

function TenDays() {
  return (
    <>
      <div className="bg-[#424769] p-4 rounded-lg mt-4">
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
            className="text-gray-400 w-5 h-5 "
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
          </svg>
          <h2 className="text-xl font-medium border-b border-gray-600 pb-2">
            10-DAY FORECAST
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-4">
          <div className="text-center">
            <div>Today</div>
            <div className="text-2xl font-semibold">28°</div>
            {/* <CloudRainIcon className="text-gray-400 w-6 h-6 mx-auto" /> */}
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
              className="text-gray-400 w-6 h-6 mx-auto"
            >
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="M16 14v6" />
              <path d="M8 14v6" />
              <path d="M12 16v6" />
            </svg>
          </div>
          <div className="text-center">
            <div>Thu</div>
            <div className="text-2xl font-semibold">28°</div>
            {/* <CloudRainIcon className="text-gray-400 w-6 h-6 mx-auto" /> */}
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
              className="text-gray-400 w-6 h-6 mx-auto"
            >
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="M16 14v6" />
              <path d="M8 14v6" />
              <path d="M12 16v6" />
            </svg>
          </div>
          <div className="text-center">
            <div>Fri</div>
            <div className="text-2xl font-semibold">26°</div>
            {/* <CloudSunRainIcon className="text-gray-400 w-6 h-6 mx-auto" /> */}
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
              className="text-gray-400 w-6 h-6 mx-auto"
            >
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="M16 14v6" />
              <path d="M8 14v6" />
              <path d="M12 16v6" />
            </svg>
          </div>
          <div className="text-center">
            <div>Sat</div>
            <div className="text-2xl font-semibold">29°</div>
            {/* <CloudRainIcon className="text-gray-400 w-6 h-6 mx-auto" /> */}
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
              className="text-gray-400 w-6 h-6 mx-auto"
            >
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="M16 14v6" />
              <path d="M8 14v6" />
              <path d="M12 16v6" />
            </svg>
          </div>
          <div className="text-center">
            <div>Sun</div>
            <div className="text-2xl font-semibold">32°</div>
            {/* <SunIcon className="text-gray-400 w-6 h-6 mx-auto" /> */}
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
              className="text-gray-400 w-6 h-6 mx-auto"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </div>
          {/* <div className="text-center">
                  <div>Mon</div>
                  <div className="text-2xl font-semibold">28°</div>
                  <CloudRainIcon className="text-gray-400 w-6 h-6 mx-auto" />
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
                    className="text-gray-400 w-6 h-6 mx-auto"
                  >
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                    <path d="M16 14v6" />
                    <path d="M8 14v6" />
                    <path d="M12 16v6" />
                  </svg>
                </div> */}
        </div>
      </div>
    </>
  );
}

export default TenDays;
