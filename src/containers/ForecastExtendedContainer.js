import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended';
import { getForecastdataFromCities, getCity } from './../reducers';
//Conecta las librerias react y redux para no tener que importar cada store en cada uno de los componentes
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            <div>
                { city && <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended> }
            </div>
        );
    }
}

ForecastExtendedContainer.propTypes = {
   city: PropTypes.string.isRequired,
   forecastData: PropTypes.array,
};


//Funcion encargada de consultar el estado, recibe como primer parametro el state y se lo asocia a la propiedad city
const mapStateToProps = state => ( {city: getCity(state), forecastData: getForecastdataFromCities(state) } );
  
//Connect es una funcion que espera 2 funciones como parametro y devuelve otra funcion
//Usamos la primera funcion para consultar el state
export default connect( mapStateToProps, null ) (ForecastExtendedContainer);