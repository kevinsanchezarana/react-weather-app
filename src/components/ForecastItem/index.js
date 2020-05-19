import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData';

const ForecastItem = ( { weekDay, hour, data } ) => (
<div>
    <h2>{weekDay} - {hour} h</h2>
    <WeatherData data={data}></WeatherData>
</div>
)

PropTypes.ForecastItem = {
    weekDay: PropTypes.array.isRequired,
    hour: PropTypes.array.isRequired,
    data : PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        wind: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired
    })
}

export default ForecastItem;