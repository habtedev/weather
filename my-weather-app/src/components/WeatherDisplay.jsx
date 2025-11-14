
export default function WeatherDisplay({ data }) {
  if (!data) return null;

      // Destructure necessary weather data
  const { name, main, weather, wind } = data;
  const temp = Math.round(main.temp);
  const desc = weather?.[0]?.description || '';
  const icon = weather?.[0]?.icon;

  return (

    // Weather display card
    <div className="weather-card card">
      <h2 className="city">{name}</h2>
      {/* Top section with icon and temperature */}
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

    {/*  Temperature and condition block */}
        <div className="temp-block">
          <div className="temp">{temp}°C</div>
          <div className="cond">{desc}</div>
        </div>
      </div>

      {/*  Additional weather metadata */}
      <div className="meta">
        <div>Humidity: <strong>{main.humidity}%</strong></div>
        <div>Wind: <strong>{wind.speed} m/s</strong></div>
      </div>
    </div>
  );
}
