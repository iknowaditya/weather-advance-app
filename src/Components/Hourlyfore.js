import React, { useEffect } from "react";

function Hourlyfore() {
  const API_KEY = "04b0b4fa37f49760f0d68f3fedc376c3";
  const lat = 21.0285;
  const lon = 105.8542;

  useEffect(() => {
    const getData = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch weather data: ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error in getData:", error);
        throw error;
      }
    };
    getData();
  }, [lat, lon, API_KEY]);

  return (
    <>
      <div className="bg-[#424769] p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 142.447 142.447"
            className="text-gray-400 w-5 h-5"
            fill="rgb(156 163 175)"
          >
            <g>
              <path
                // style="fill:#1D1D1B;"
                d="M71.224,0C31.951,0,0,31.951,0,71.224s31.951,71.224,71.224,71.224s71.224-31.951,71.224-71.224
		S110.496,0,71.224,0z M71.224,127.447C40.222,127.447,15,102.226,15,71.224S40.222,15,71.224,15s56.224,25.222,56.224,56.224
		S102.226,127.447,71.224,127.447z"
              />
              <path
                // style="fill:#1D1D1B;"
                d="M100.923,72.016H71.724V46.724c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v32.792
		c0,4.143,3.357,7.5,7.5,7.5h36.699c4.143,0,7.5-3.357,7.5-7.5S105.065,72.016,100.923,72.016z"
              />
            </g>
          </svg>
          <h2 className="text-xl font-medium border-b border-gray-600 pb-2">
            HOURLY FORECAST
          </h2>
        </div>

        <div className="flex justify-between mt-4">
          <div className="text-center">
            <div>Now</div>
            <div className="text-2xl font-semibold">28°</div>

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
            <div>15:00</div>
            <div className="text-2xl font-semibold">28°</div>

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
            <div>16:00</div>
            <div className="text-2xl font-semibold">26°</div>

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
            <div>17:00</div>
            <div className="text-2xl font-semibold">29°</div>

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
            <div>18:00</div>
            <div className="text-2xl font-semibold">32°</div>

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
          <div className="text-center">
            <div>19:00</div>
            <div className="text-2xl font-semibold">28°</div>

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
        </div>
      </div>
    </>
  );
}

export default Hourlyfore;
