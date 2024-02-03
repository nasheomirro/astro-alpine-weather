import { countryCodeToName } from "@/utils";
import type { ForecastData, WeatherData } from "./types";

// fetch real time up-to-date weather data https://openweathermap.org/current#geo
export async function fetchWeatherData(coords: {
  lat: string;
  lon: string;
}): Promise<WeatherData> {
  const { lat, lon } = coords;
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.WEATHER_API_KEY
    }&units=metric`
  ).then((res) => {
    if (!res.ok) throw Error();
    return res.json();
  });
}

// using the 5 day - 3 hour forecast https://openweathermap.org/forecast5#geo5
export async function fetchForecastData(coords: {
  lat: string;
  lon: string;
}): Promise<ForecastData> {
  const { lat, lon } = coords;
  return await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.WEATHER_API_KEY
    }&units=metric&cnt=6`
  ).then((res) => {
    if (!res.ok) throw Error();
    return res.json();
  });
}

export function processWeatherData(weatherData: WeatherData) {
  return {
    name: weatherData.name,
    main: weatherData.main,
    coords: weatherData.coord,
    visibility: `${Math.round(weatherData.visibility / 1000)}km`,
    weather: weatherData.weather[0],
    cloudiness: weatherData.clouds.all,
    country: countryCodeToName(weatherData.sys.country),
  };
}
