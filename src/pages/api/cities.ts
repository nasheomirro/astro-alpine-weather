import { countryCodeToName } from "@/utils";
import type { APIRoute } from "astro";

const QUERY_LIMIT = 7;

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get("q");

  // TODO: handle error
  let cities = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=${QUERY_LIMIT}&appid=${
      import.meta.env.WEATHER_API_KEY
    }`
  ).then((res) => {
    return res.json();
  });

  // remove parts not used in the app
  cities = cities.map((city) => ({
    name: city.name,
    lat: city.lat,
    lon: city.lon,
    country: countryCodeToName(city.country),
  }));

  return new Response(JSON.stringify(cities), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
