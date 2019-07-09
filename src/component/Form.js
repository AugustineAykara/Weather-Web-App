import React from "react"

const Form = props => (
    <form className="form-container" onSubmit={props.getWeather}>

        <input className="city-container" type="text" name="city" placeholder="Enter city" />
        <input className="country-container" type="text" name="country" defaultValue="IN" placeholder="Enter country" />
        <button>Get Weather</button>
    
    </form>
);

export default Form;
