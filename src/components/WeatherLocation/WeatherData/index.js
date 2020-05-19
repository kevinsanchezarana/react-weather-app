import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './style.css';
import PropTypes from 'prop-types';

const WeatherData = ( { data : { temperature, weatherState, wind, humidity } } ) => (
    <div className="weatherDataCont" >
        <WeatherTemperature temperature={temperature} weatherState={weatherState} ></WeatherTemperature>
        <WeatherExtraInfo wind={wind} humidity={humidity}></WeatherExtraInfo>
    </div>
);

WeatherData.propTypes = {
    data : PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        wind: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired
    })
}

export default WeatherData;