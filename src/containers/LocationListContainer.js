import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Conecta las librerias react y redux para no tener que importar cada store en cada uno de los componentes
import { connect } from 'react-redux';
//import { setSelectedCity, setWeather } from './../actions';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';
import { bindActionCreators } from 'redux';

//Los container son componentes que manejan el estado de la app
class LocationListContainer extends Component {

    componentDidMount() {
        // const { setWeather, setCity, cities, city  } = this.props;
        // setWeather(cities);
        // setCity(city);
        const { setWeather, setSelectedCity, cities, city  } = this.props;
        setWeather(cities);
        setSelectedCity(city);        
    }

    handleSelectionLocation = city => {
        this.props.setSelectedCity(city);
    }

    render() {
        return (<LocationList
            cities={this.props.citiesWeather}
            onSelectedLocation={this.handleSelectionLocation}>
        </LocationList>);
    }
}

LocationListContainer.propTypes = {
    // setCity: PropTypes.func.isRequired,
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};


//El parametro dispatch viene del componente provider, en concreto, del atributo store que esta inyectado en el contexto de la App
//Añade el parametro setCity a los props del componente App
// const mapDispatchToProps = dispatch => (
//     {
//         setCity: value => dispatch(setSelectedCity(value)),
//         setWeather: cities => dispatch(setWeather(cities)),
//     }
// );
//Podemos usar el anterior o este metodo
const mapDispatchToProps = dispatch => bindActionCreators (actions,dispatch);

const mapStateToProps = state => (
    {
        citiesWeather: getWeatherCities(state),
        city: getCity(state)
    }
);

//Connect es una funcion que espera 2 funciones como parametro y devuelve otra funcion
//Es una funcion que modifica el componente pasado por parametro y le añade mejoras, es este caso el store.
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
