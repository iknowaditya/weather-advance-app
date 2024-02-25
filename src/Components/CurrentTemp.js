import React from "react";

const CurrentTemp = ({ weather, handleButtonClick, units, bg }) => {
  // const [selectedMode, setSelectedMode] = React.useState(null);
  if (!weather) {
    return <p>Loading weather data...</p>; // Or display a custom message
  }

  if (!weather.temp) {
    return <p>Temperature data unavailable.</p>; // Handle missing temperature
  }

  const tempUnit = units === "metric" ? "C" : "F";
  return (
    <>
      <div className="border border-gray-700 p-4 rounded-lg bg-[#424769]">
        <div className=" flex justify-between items-center">
          <h1 className="text-4xl font-semibold">{`${weather.name}, ${weather.country}`}</h1>
          <div className=" flex items-end w-14">
            <button
              className=" w-full text-3xl px- rounded-lg bg-[#5b6182] text-gray-400  border-gray-700 transform duration-500 hover:bg-[#646b90]"
              onClick={handleButtonClick}
            >
              °F
            </button>
          </div>
        </div>
        <div className=" flex justify-between ">
          <div className="text-9xl font-bold ">
            {`${weather.temp.toFixed()}°`}
            <span className="-ml-2 text-7xl">{tempUnit}</span>
          </div>
          <div
            className="current-temp-container"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </div>

        <div className="text-4xl font-semibold">{weather.main}</div>
        <p className="mt-4 text-sm">
          Today's forecast includes {weather.description.toLowerCase()} with
          temperatures ranging from {`${weather.temp.toFixed()}°C`} to{" "}
          {`${weather.temp_max.toFixed()}°C`}. Whether it's rain or shine, be
          prepared for the day's weather conditions.
        </p>
      </div>
    </>
  );
};

export default CurrentTemp;
