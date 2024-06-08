import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Weather from './Weather';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    const apiKey = 'f9826eb7153e5f4fd8db14e8698898fa'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error fetching the weather data');
      }
      const data = await response.json();
      console.log('API Response:', data); 
      setWeatherData(data);
      setError(null); 
    } catch (error) {
      console.error('Error fetching the weather data:', error);
      setError('Error fetching the weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Weather weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
