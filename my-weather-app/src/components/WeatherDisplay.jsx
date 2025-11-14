// Presentational component: shows current weather details with an icon.
// Expects `data` shaped like OpenWeatherMap's current weather response.
export default function WeatherDisplay({ data }) {
  if (!data) return null;

  const { name, main, weather, wind } = data;
  const temp = Math.round(main.temp);
  const desc = weather?.[0]?.description || '';
  const icon = weather?.[0]?.icon;

  return (
    <div className="weather-card card">
      <h2 className="city">{name}</h2>

      <div className="top">
        {icon && (
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={desc}
            width="80"
            height="80"
          />
        )}

        <div className="temp-block">
          <div className="temp">{temp}°C</div>
          <div className="cond">{desc}</div>
        </div>
      </div>

      <div className="meta">
        <div>Humidity: <strong>{main.humidity}%</strong></div>
        <div>Wind: <strong>{wind.speed} m/s</strong></div>
      </div>
    </div>
  );
}
