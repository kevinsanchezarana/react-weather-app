import { URL_BASE_FORECAST, API_KEY } from './../constants/api_weather';
import transformForecast from './../services/transformForecast'
import transformWeather from './../services/transformWeather'
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER = 'GET_WEATHER';
export const SET_WEATHER = 'SET_WEATHER';

const setCity = payload => ( { type: SET_CITY, payload } );
const setForecastData = payload => ( { type: SET_FORECAST_DATA, payload } );
const getWeatherCity = payload => ( { type: GET_WEATHER, payload } );
const setWeatherCity = payload => ( { type: SET_WEATHER, payload } );

export const setSelectedCity = payload => {

    return ( dispatch, getState ) => {

        //lanzar el fetch y actualizar el state cuando se cumpla la promesa
        const urlForecast = `${URL_BASE_FORECAST }?q=${payload}&appid=${API_KEY}`;

        // activar en el estado un identificador de la busqueda de datos
        //Establcemos la ciudad buscada como actual
        dispatch( setCity(payload) );

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();

        if( date && now - date < 60 * 1000 ){
            return;
        }

        return fetch( urlForecast ).then ( resolve => {
            //throw new Error("Attempted division by zero!");
            //Devuelve otra promesa con el resultado del body en formato json
            return resolve.json();
        }).then ( weather_data => {
            const forecastData = transformForecast( weather_data );
            console.log(forecastData);

            //modificar el estado con el resultado del promise
            dispatch( setForecastData( {city: payload, forecastData }) );


        }).catch ( error => {
            console.log( error );
        });

    }

} 

export const setWeather = payload => {

    return dispatch => {

        payload.forEach( city => {

            dispatch( getWeatherCity( city ) );
            fetch( getUrlWeatherByCity ( city ) ).then ( resolve => {
                //throw new Error("Attempted division by zero!");
                //Devuelve otra promesa con el resultado del body en formato json
                return resolve.json();
            }).then ( weatherData => {
                const weather = transformWeather( weatherData );
                dispatch( setWeatherCity( { city, weather } ) );
            }).catch ( error => {
                console.log( error );
            });

        });

    }

} 