import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

const WeatherLocation = ( { onWeatherLocationClick, city, data } ) => {

    return ( <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
            { data  ? <WeatherData data={data}></WeatherData>
                    : <CircularProgress size={50} />
            }
     </div>);
}

WeatherLocation.propTypes = {
    onWeatherLocationClick: PropTypes.func,
    city : PropTypes.string.isRequired,
    data : PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        wind: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired
    })    
}

export default WeatherLocation;