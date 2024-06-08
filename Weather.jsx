import React from 'react';

function Weather({ weatherData }) {
  if (!weatherData) {
    return <div>No data available</div>;
  }

  const { name, main, weather } = weatherData;
  return (
    <div>
      <h2>Weather in {name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Condition: {weather[0].description}</p>
    </div>
  );
}

export default Weather;
