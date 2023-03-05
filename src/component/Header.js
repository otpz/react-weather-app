import { useWeatherContext } from "../context/WeatherContext"
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faCloudRain } from '@fortawesome/free-solid-svg-icons'
function Header(){
    const {citiesData, currentCity, setCurrentCity, weatherData, loading, dayObj} = useWeatherContext()
    const weatherDesc = [
        {description: ["light rain","Hafif Yağmurlu"]},
        {description: ["clear sky","Açık Hava"]},
        {description: ["overcast clouds","Bulutlu"]},
        {description: ["scattered clouds","Dağınık Bulutlu"]},
        {description: ["few clouds","Az Bulutlu"]},
        {description: ["light snow","Hafif Karlı"]},
        {description: ["broken clouds","Parçalı Bulutlu"]},
        {description: ["moderate rain","Ilımlı Yağmur"]},
    ]
    const formik = useFormik({
        initialValues:{
            name: ''
        },
        onSubmit: (values) => {
            console.log("values: ",values)
            console.log("Current city:",currentCity)
            setCurrentCity(citiesData.find((item) => item.name === values.name))
        }
    })
    if (loading){
        return <div></div>;
    }
    console.log(weatherData);
    return (
        <header className="header-content">
            <h1 className="header">Türkiye Hava Durumu</h1>
            <div className="weather-header-content">
                <div className="form">
                    <label className="label" htmlFor="name">Şehirler</label><br />
                    <select name="name" id="name" value={currentCity.name} onChange={(e) =>{formik.handleChange(e); formik.submitForm()}}>
                        {citiesData.map((city, key) => {
                            return (
                                <option className="option" value={city.name} key={key}>    
                                {city.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="header-mid-section">
                    {weatherData.list.map((weather, idx) => {
                        if(idx === 0){
                            return (
                                <div className="mid-section-div" key={idx}>
                                    <div className="mid-section-all-top">
                                        <div className="mid-section-top">
                                            <h3 className="mid-header">{dayObj.map(item => item.day[0] === new Date(weather.dt * 1000).toString().split(" ")[0] ? item.day[1] : null)}</h3>  
                                            <span className="day-info">{weather.sys.pod === "n" ? "Gece" : "Gündüz"}</span>
                                        </div>
                                        <div className="mid-section-bottom">
                                            <img
                                                className="images"
                                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                                alt="weather"
                                            />
                                            <span className="dark">{weather.main.temp.toFixed(1)}°{" "}</span>
                                            <span className="soft">{weather.main.feels_like.toFixed(1)}°</span>
                                        </div>
                                    </div>
                                    <div className="mid-section-all-bottom">
                                        <div className="weather-info-div">
                                            {weatherDesc.map(item => item.description[0] === weather.weather[0].description ? item.description[1] :  null)}
                                        </div>
                                        <span ><FontAwesomeIcon icon={faWind} /> Rüzgar yönü: {weather.wind.deg}° </span>
                                        <span><FontAwesomeIcon icon={faCloudRain} /> Yağış Olasılığı: %{weather.pop*100} </span>
                                    </div>
                                </div>
                            )
                        }
                        return ''
                    })}
                </div>
                <div className="weather-info">
                    <h3>Şehir | <span className="current-city">{currentCity.name}</span></h3>
                    <span>Tarih | {weatherData.list[0].dt_txt.split(' ')[0]}</span>
                    <span className="soft-paragraph">Son Güncelleme : {weatherData.list[0].dt_txt.split(' ')[1]}</span>
                </div>
            </div>
        </header>
    )
}
export default Header