import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

//Usando destructuring de ec6 se le asigna a la variable la key con el mismo nombre
const Location = ( { city } ) => (
        <div className="locationCont">
                <h1> { city } </h1>
        </div>
);

Location.propTypes = {
        city : PropTypes.string.isRequired
}
    

export default Location;