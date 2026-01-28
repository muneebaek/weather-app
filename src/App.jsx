
import { useState } from "react";
import WeatherCard from "./COMPONENTS/WeatherCard/WeatherCard";
import Forecast from "./COMPONENTS/Forecast/Forecast";
import SearchBar from "./COMPONENTS/SearchBar/SearchBar";
import { getCurrentWeather, getForecast } from "./COMPONENTS/ApiServieces/WeatherApi";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchCity = async (city) => {
    try {
      setLoading(true);
      const weatherData = await getCurrentWeather(city);
      const forecastData = await getForecast(city);

      setWeather(weatherData);
      setForecast(forecastData);
    } catch {
      alert("City not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <SearchBar onSearch={searchCity} />
      {loading && <p>Loading...</p>}
      <WeatherCard data={weather} />
      <Forecast forecast={forecast} />
    </div>
  );
}

export default App;
