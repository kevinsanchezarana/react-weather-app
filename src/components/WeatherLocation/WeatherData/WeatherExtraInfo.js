import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ( { humidity, wind } ) => (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{ `Humedad: ${ humidity } % ` }</span>
        <span className="extraInfoText">{ `Viento: ${ wind } m/s` }</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.number.isRequired
}

export default WeatherExtraInfo;