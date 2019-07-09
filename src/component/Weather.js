import React from "react";

const Weather = (props) => (

        <div>
        {
            props.city && props.country && 
                <p className="weather_key location">
                    {props.city}, {props.country}
                </p> 
        }
        {
            props.temperature && 
                <p className="weather_key">  
                    <img className="weather_icon" src={`https://openweathermap.org/img/wn/${props.weather_icon}@2x.png`} />
                </p> 
        }
        {
            props.temperature && 
                <p className="weather_key temperature">
                    {props.temperature}°C
                </p> 
        }
        {
            props.temperature && 
                <p className="weather_key min_max_temperature">
                    {props.min_temperature}°C | {props.max_temperature}°C
                </p> 
        }
        {
            props.humidity && 
                <p className="weather_key humidity"> 
                    HUMIDITY : {props.humidity} %
                </p> 
        }
        {
            props.wind && 
                <p className="weather_key wind_speed">
                    WIND SPEED : {props.wind} m/s
                </p> 
        }
        {
            props.description && 
                <p className="weather_key conditions">   
                    {props.description}
                </p> 
        }
        {
            props.error && <h3 className="weather__error error">{props.error}</h3>
        }
    </div>  
);

export default Weather;
