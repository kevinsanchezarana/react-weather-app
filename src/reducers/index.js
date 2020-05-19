import { combineReducers }  from 'redux';
//La libreria reselect usa el patron memoized empleado para cachear información y no tener que calcular de nuevo
import { createSelector } from 'reselect';
import {    cities,
            getForecastdataFromCities as _getForecastdataFromCities, 
            getWeatherCities as _getWeatherCities, 
} from './cities';
import { city, getCity as _getCity } from './city';

export default combineReducers({
    cities,
    city
});

//createSelector recibe un conjunto de selectores y en el ultimo parametro se le indica que se tiene que devolver
//si se quiere devolver mas de un resultado, debe haber tantos selectores como resultados existan
export const getCity = createSelector ( state => _getCity( state ), city => city );
//Se le pasa a la funcion _getForecastdataFromCities los parametros cities y city. Siempre se trabaja con funciones
export const getForecastdataFromCities = createSelector ( state => state.cities, getCity, _getForecastdataFromCities );

export const getWeatherCities = createSelector ( state => state.cities, _getWeatherCities );