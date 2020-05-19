import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

const renderForecastItemDays = forecastData => (
    forecastData.map( forecast => <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem> )
)

const renderProcess = () => (
    <CircularProgress size={50} />
)

const ForecastExtended = ( {city, forecastData } )  => {

    return (
        <div>
            <h2 className="forecast-title">Pronóstico Extendido para: {city}</h2>
            { 
                forecastData    ? renderForecastItemDays( forecastData )
                                : renderProcess()
            }
        </div>
    );

}

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;