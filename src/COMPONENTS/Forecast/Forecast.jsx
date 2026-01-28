function Forecast({ forecast }) {
  if (!forecast) return null;

  const daily = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast">
      {daily.map((day) => (
        <div key={day.dt} className="forecast-card">
          <p>{day.dt_txt.split(" ")[0]}</p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
          />
          <p>{Math.round(day.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
