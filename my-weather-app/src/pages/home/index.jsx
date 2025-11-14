import { useState, useEffect } from "react";
import SearchInput from "../../components/SearchInput";
import WeatherDisplay from "../../components/WeatherDisplay";

// Home page: manages top-level weather state and coordinates fetching.
// - Keeps a default city, handles loading/error states, and passes
//   fetched data down to presentational components.
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  // UI state: selected city, fetched weather, and control flags
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch current weather for a given city using OpenWeatherMap.
  // Expects VITE_API_KEY to be set in the environment (.env).
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // On mount, load weather for the default city.
  useEffect(() => {
    fetchWeather(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Weather Forecast</h1>
      {/* SearchInput calls fetchWeather when the user submits a city */}
      <SearchInput onSearch={fetchWeather} />

      {/* Conditional UI for loading / error / success */}
      {loading && (
        <div className="loading">
          <div className="spinner" />
          <div>Loading...</div>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && <WeatherDisplay data={weather} />}
    </div>
  );
}
