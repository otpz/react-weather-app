import React from 'react'
import { useWeatherContext } from '../context/WeatherContext'

function WeatherInfo(){
    const {weatherData, loading, dayObj} = useWeatherContext()
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    
    if (loading){
      return <div className='loading'>Loading...</div>;
    }
    return(
        <div className="date-soft">
        {weatherData.list.map((data, idx) => {
          if (idx % 8 === 0 && idx !== 0) { 
            return (
              <div className={`weather-content ${new Date(data.dt * 1000).toString().split(" ")[0] === days[new Date().getDay()] ? "active" : null}`}  key={idx}>
                <h3 className='mid-header'>
                  {
                    dayObj.map(item => item.day[0] === new Date(data.dt * 1000).toString().split(" ")[0] ? item.day[1] : null)
                  }
                </h3> 
                <div className='mid-section'>
                  <img
                    className="images"
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt="weather"
                  />
                </div>
                <div className='deg'>
                    <span className="dark">{data.main.temp.toFixed(1)}°{" "}</span>
                    <span className="soft">{data.main.feels_like.toFixed(1)}°</span>
                  </div>
                <div className='mini-info'>
                    <span >nem: %{data.main.humidity}</span>
                    <span >rüzgar: {data.wind.speed}m/s</span>
                  </div>
              </div>
            );
          }
          return ""
        })}
      </div>
    )
}

export default WeatherInfo