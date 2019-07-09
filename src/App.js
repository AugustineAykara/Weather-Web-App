import React from "react";
import Titles from "./component/Titles";
import Form from "./component/Form";
import Weather from "./component/Weather"

const API_KEY = "aebdd7758f13157e1f0b407b96d57ed5";

class App extends React.Component {
  state = {
    temperature : undefined,
    min_temperature : undefined,
    max_temperature : undefined,
    city : undefined, 
    country : undefined,
    weather_icon : undefined,
    wind : undefined, 
    humidity : undefined, 
    description : undefined, 
    error : undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const CITY = e.target.elements.city.value;
    const COUNTRY = e.target.elements.country.value;

    const API_CALL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&APPID=${API_KEY}&units=metric`); 
    const DATA = await API_CALL.json();

    if (CITY && COUNTRY) {
      console.log(DATA);
      this.setState({
        temperature : DATA.main.temp,
        min_temperature : DATA.main.temp_min,
        max_temperature : DATA.main.temp_max,
        city : DATA.name,
        country : DATA.sys.country,
        wind : DATA.wind.speed,
        humidity : DATA.main.humidity,
        weather_icon : DATA.weather[0].icon,
        description : DATA.weather[0].description,
        error : ""     
      }); 
    }
    else {
      this.setState({
        temperature : undefined,
        min_temperature : undefined,
        max_temperature : undefined,
        city : undefined,
        country : undefined,
        wind : undefined, 
        humidity : undefined,
        weather_icon : undefined,
        description : undefined,
        error : "Please enter City and Country name..."      
      }); 
    }
  }

  render() {
    
    return (
      <div>
        
        <div className="container">
          <div className="row">
            
            <div className="col-md-5 form-container">
              <Titles />
              <Form getWeather={this.getWeather} />  
            </div>    

            <div className="col-md-7 weather-container">
              <Weather
                temperature = {this.state.temperature}
                min_temperature = {this.state.min_temperature}
                max_temperature = {this.state.max_temperature}
                city = {this.state.city}
                country = {this.state.country}
                wind = {this.state.wind}
                humidity = {this.state.humidity}
                weather_icon = {this.state.weather_icon}
                description = {this.state.description}
                error = {this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
