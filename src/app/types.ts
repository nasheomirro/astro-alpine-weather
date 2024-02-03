import type { processWeatherData } from "./weather";

type WeatherItem = {
  id: string;
  main: string;
  description: string;
  icon: string;
};

// https://openweathermap.org/current#example_JSON
// did not include the optional properties
export type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherItem[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

// https://openweathermap.org/forecast5#fields_JSON
// there are more but list is all that we want.
export type ForecastData = { list: WeatherData[] };

export type ProcessedWeatherData = ReturnType<typeof processWeatherData>;
