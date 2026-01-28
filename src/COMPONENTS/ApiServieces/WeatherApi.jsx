import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: "metric",
  },
});

export const getCurrentWeather = async (city) => {
  const res = await api.get("/weather", {
    params: { q: city },
  });
  return res.data;
};


export const getForecast = async (city) => {
  const res = await api.get("/forecast", {
    params: { q: city },
  });
  return res.data;
};