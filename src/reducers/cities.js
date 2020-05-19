import { SET_FORECAST_DATA, GET_WEATHER, SET_WEATHER  } from './../actions';
import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';

//El reducer se encarga de modificar el estado segun la accion que se le pase
//Las buenas practicas indican que se debe crear un reducr por accion
//Este reducer se encarga de actualizar los forecastdata de cada una de las ciudades seleccionadas en el estado
export const cities = ( state = {}, action) => {
    switch( action.type ){
        case SET_FORECAST_DATA:{
            //El operador ... desglosa el objeto siguiente y sirve para crear una copia del mismo añadiendo / modificando propiedades
            //Con spread operator se esta diciendo en cities[city] añade forcastData y no elimines cities[city].weather
            const { city, forecastData } = action.payload;
            state = { ...state, [city] : { ...state[city], forecastData, forecastDataDate: new Date() } };
            break;
        }
        case GET_WEATHER:{
            const city  = action.payload;
            //Obtenemos en el estado cities[city].weather y si no hay nada devolvemos un null
            state = { ...state, [city] : { ...state[city], weather: null } };
            break;
        }
        case SET_WEATHER:{
            const { city, weather } = action.payload;
            //Seteamos el weather de cities[city].weather
            state = { ...state, [city] : { ...state[city], weather } };
            break;
        }
        default:
            break;    
    }
    return state;
}

//Selector empleado para obtener las ciudades del state, en este caso el parametro stet se corresponde con el campo cities del state
export const getForecastdataFromCities = createSelector( (state, city) => state[city] && state[city].forecastData, forecastData => forecastData);

//Funcion encargada de convertir una estructura de objetos, donde cada uno de esllo tiene la propiedad city como nombre a array
// const fromObjToArray = cities => ( toPairs( cities ).map( ( [key, value ] ) => ( { key, name: key, data: value.weather } ) ) );
const fromObjToArray = cities => {
    return toPairs( cities ).map( ( [key, value ] ) => { 
        // if ( key === 'undefined' ){
        //     return { key: null, name: null, data: null };
        // }
        return { key, name: key, data: value.weather };
    } );
};

//Es necesario llamar a fromObjToArray ya que el servicio nos devuelve las cities en objetos de objetos y gracias a pairs podemos recorrerlos
export const getWeatherCities = createSelector( state => fromObjToArray(state), cities => cities );