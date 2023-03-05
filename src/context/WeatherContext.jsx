import { createContext, useContext, useState, useEffect } from "react";
import citiesData from "../data/citiesData.json";

const WeatherContext = createContext()
const WeatherProvider = ({children}) => {
    const [currentCity, setCurrentCity] = useState(citiesData.find((item) => item.name === "Uşak"))
    const [weatherData, setWeatherData] = useState()
    const [loading, setLoading] = useState(true)
    const dayObj = [
        {day: ["Sun","Pazar"]},
        {day: ["Mon","Pazartesi"]},
        {day: ["Tue","Salı"]},
        {day: ["Wed","Çarşamba"]},
        {day: ["Thu","Perşembe"]},
        {day: ["Fri","Cuma"]},
        {day: ["Sat","Cumartesi"]},
    ]
    const weatherContextData = {citiesData, currentCity, weatherData, setCurrentCity, loading, dayObj }
    
    useEffect(() => {
        const getCityWeatherData = async (currentCity) => {
            setLoading(true)  
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity.name}&units=metric&appid=d4eba4bb3a2cd6ed0bb563ded94832da`).then( response => response.json() )
                setWeatherData(response)
                setLoading(false)
            } 
            catch(e){
                console.log("Veri alınırken bir hata oluştu", e)
                setLoading(true)
            }
        };
        getCityWeatherData(currentCity)
    }, [currentCity]);
    return <WeatherContext.Provider value={weatherContextData}>{children}</WeatherContext.Provider>
}   
const useWeatherContext = () => useContext(WeatherContext)

export {WeatherProvider, useWeatherContext }