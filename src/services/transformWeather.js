import convert from 'convert-units';

import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../constants/weather';


const getWeatherData = weather => {

    const { id } = weather;

    if( id < 300 ){
        return THUNDER;
    }else if ( id < 400 ){
        return DRIZZLE;
    }else if( id < 600 ){
        return RAIN;
    }else if( id < 700 ){
        return SNOW;
    }else if( id === 800 ){
        return SUN;
    }else{
        return CLOUD;
    }
    
}

const getTemperaureInCelcius = kelvin => {
    return Number( convert( kelvin ).from( 'K' ).to( 'C' ).toFixed(0) );
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherData(weather_data.weather[0]);
    const tempCelcius = getTemperaureInCelcius( temp );

    return {
        humidity,
        temperature: tempCelcius,
        weatherState,
        wind: speed
    }
}

export default transformWeather;