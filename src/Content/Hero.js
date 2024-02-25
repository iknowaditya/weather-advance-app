import React, { useState, useEffect, useCallback } from "react";
import { getFormattedWeatherData } from "../WeatherService";
import cloud from "../Assets/cloud.png";
import sunny from "../Assets/sunny.png";
import rain from "../Assets/cold.png";
import good from "../Assets/nice.svg";

import {
  CurrentTemp,
  FeelsLike,
  Pressure,
  Visibility,
  Humidity,
  Sunset,
  Wind,
  Hourlyfore,
  TenDays,
  UvIndex,
  AirPollution,
} from "../Components";

function Hero() {
  const [getValue, setGetValue] = useState("");
  const [weather, setWeather] = useState({
    city: "Hanoi", // Default city
  });
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState();

  const handleClick = () => {
    const cityName = getValue.trim(); // Trim any leading/trailing spaces
    if (cityName) {
      fetchWeatherData(cityName);
    } else {
      setWeather({ city: "Hanoi" }); // Clear any existing weather data if no city name is entered
    }
    setGetValue("");
  };

  const fetchWeatherData = async (cityName) => {
    try {
      const data = await getFormattedWeatherData(cityName, units);
      setWeather(data);
      // Set bg image based on temperature
      const hot = units === "metric" ? 30 : 86;
      const warm = units === "metric" ? 15 : 59;
      const cool = units === "metric" ? 5 : 41;
      const cold = units === "metric" ? 0 : 32;

      const temperature = data.temp;

      if (temperature >= hot) {
        setBg(sunny);
      } else if (temperature >= warm) {
        setBg(good);
      } else if (temperature >= cool) {
        setBg(cloud);
      } else if (temperature >= cold) {
        setBg(rain);
      } else {
        // setBg(coldBg);
      }
    } catch (err) {
      console.log("Error fetching weather data:", err);
    }
  };

  useEffect(() => {
    fetchWeatherData("Hanoi"); // Fetch data for default city on mount
  }, [units]);

  const handleButtonClick = useCallback(
    (e) => {
      const button = e.currentTarget;
      const currentUnit = button.innerText.slice(1);
      const isCelsius = currentUnit === "C";
      button.innerText = isCelsius ? "°F" : "°C";
      setUnits(isCelsius ? "metric" : "imperial");
    },
    [setUnits]
  );

  return (
    <div className="bg-[#2D3250] text-gray-400 min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mt-6 flex flex-col lg:flex-row lg:space-x-8">
          <div className="flex-1">
            <CurrentTemp
              weather={weather}
              handleButtonClick={handleButtonClick}
              units={units}
              bg={bg}
            />
            <form className="mt-6 block lg:hidden">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                    className="w-5 h-5 text-gray-400 "
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <input
                  id="cityInput"
                  type="search"
                  className="block w-full p-4 ps-10 text-gray-200 text-base border border-gray-700 rounded-lg focus:ring-gray-700 bg-[#424769] outline-none"
                  placeholder={getValue ? "" : "Search City..."}
                  value={getValue}
                  onChange={(e) => setGetValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleClick();
                      e.currentTarget.blur();
                    }
                  }}
                />
                <button
                  type="button"
                  className="absolute end-2.5 bottom-2.5 bg-[#5b6182] hover:bg-[#646b90] transform duration-500  font-medium rounded-lg text-sm px-4 py-2 "
                  onClick={handleClick}
                >
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
                    className="w-5 h-5 text-gray-300 "
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
            </form>
            <div className="mt-4 lg:mt-6 grid grid-cols-2 gap-4">
              <FeelsLike weather={weather} units={units} />
              <Pressure weather={weather} />
              <Visibility weather={weather} />
              <Humidity weather={weather} />
              <Sunset weather={weather} />
              <Wind weather={weather} units={units} />
            </div>
          </div>

          <div className="flex-1 mt-4 lg:mt-0">
            <form className="mb-4 hidden lg:block outline-none">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                    className="w-5 h-5 text-gray-400 "
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <input
                  id="cityInput"
                  type="search"
                  className="block w-full p-4 ps-10 text-gray-200 text-base border border-gray-700 rounded-lg focus:ring-gray-700 bg-[#424769] outline-none"
                  placeholder={getValue ? "" : "Search City..."}
                  value={getValue}
                  onChange={(e) => setGetValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleClick();
                      e.currentTarget.blur();
                    }
                  }}
                />

                <button
                  type="button"
                  className="absolute end-2.5 bottom-2.5 bg-[#7077A1] hover:bg-[#646b90] transform duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                  onClick={handleClick}
                >
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
                    className="w-5 h-5 text-gray-300 "
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
            </form>

            <Hourlyfore city={weather.name} units={units} bg={bg} />
            <TenDays />

            <div className="grid grid-cols-1 gap-4 mt-4">
              <UvIndex />
              <AirPollution />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
