import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {

    const handlerWeatherLocationClick = city => { onSelectedLocation(city.name)};

    const strToComponentes = (cities) => (

        cities.map(city =>{

            return ( <WeatherLocation
                key={city.key}
                onWeatherLocationClick={() => handlerWeatherLocationClick(city)}
                city={city.name}
                data={city.data}
            ></WeatherLocation> );

            })

    )

    return (
        <div className="locationList">
            {strToComponentes(cities)}
        </div>
    );

}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}

export default LocationList;