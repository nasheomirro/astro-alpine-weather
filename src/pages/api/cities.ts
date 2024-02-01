import type { APIRoute } from "astro";

const regionName = new Intl.DisplayNames(["en"], { type: "region" });

export const GET: APIRoute = async ({ url }) => {
  const city = url.searchParams.get("q");

  // TODO: handle error
  let cities = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${
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
    country: regionName.of(city.country),
  }));

  console.log(cities);
  return new Response(JSON.stringify(cities), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
