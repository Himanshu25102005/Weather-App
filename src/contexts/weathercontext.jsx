import { createContext, useContext, useState } from "react";
import getCord from "../API/geocodeAPI";
import getWeatherInfo from "../API/weatherAPI";

// 1. Create Context
const WeatherContext = createContext();

// 2. Create Provider
export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [weatherData, setWeatherData] = useState(null)

  const handleCitySubmit = async (cityName) => {
    try {
      const { lat, lng } = await getCord(cityName);    // ✅ Await the API call and destructure lat/lng
      setCity(cityName);
      setLat(lat);
      setLng(lng);

      const weather = await getWeatherInfo(lat, lng);
      setWeatherData(weather);
      
    } catch (error) {
      console.error("Error getting coordinates:", error);
    }
  };

  return (
    <WeatherContext.Provider value={{ city, setCity, lat, lng, handleCitySubmit, weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};


export const useWeather = () => useContext(WeatherContext);
