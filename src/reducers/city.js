import { SET_CITY } from './../actions';
import { createSelector } from 'reselect';

//El reducer se encarga de modificar el estado segun la accion que se le pase
//Las buenas practicas indican que se debe crear un reducr por accion
//Este reducer incluye la ultima ciudad seleccionada al state
export const city = ( state = {}, action) => {
    switch( action.type ){
        case SET_CITY:
            //El operador ... desglosa el objeto siguiente y sirve para crear una copia del mismo añadiendo / modificando propiedades
            return action.payload;
        default:
            break;    
    }
    return state;
}

export const getCity = createSelector( state => ( state.city ), city => city );