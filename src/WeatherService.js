const API_KEY = "04b0b4fa37f49760f0d68f3fedc376c3";
const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    const data = await response.json();

    const {
      weather,
      main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
      sys: { country, sunrise, sunset },
      wind: { speed },
      coord: { lon, lat },
      name,
      dt,
      visibility,
      timezone,
    } = data;

    const { description, main, icon } = weather[0];

    return {
      description,
      iconURL: makeIconURL(icon),
      main,
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      pressure,
      country,
      speed,
      name,
      sunrise,
      sunset,
      timezone,
      visibility,
      lon,
      lat,
      dt,
    };
  } catch (error) {
    console.error("Error in getFormattedWeatherData:", error);
    throw error;
  }
};

export { getFormattedWeatherData };
