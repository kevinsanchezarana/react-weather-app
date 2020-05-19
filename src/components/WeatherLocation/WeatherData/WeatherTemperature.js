import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../../../constants/weather';

//Se le añade al nombre de las keys las constantes importadas
const icons = {
    [CLOUD] : 'cloud',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'day-showers'
};

const getWeatherIcons = weatherState => {

    const sizeIcon = '4x';

    if ( !icons[weatherState] ){
        return <WeatherIcons className="wicon" name={icons.SUN} size={sizeIcon}/>;
    }

    return <WeatherIcons className="wicon" name={icons[weatherState]} size={sizeIcon}/>;

}

const WeatherTemperature = ( { temperature, weatherState} ) => (
    <div className="weatherTemperatureCont">    
        <span>{ getWeatherIcons(weatherState) }</span>
        <span className="temperature">{ `${ temperature }` }</span>
        <span className="temperatureType">{ `°C` }</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired
}


export default WeatherTemperature;