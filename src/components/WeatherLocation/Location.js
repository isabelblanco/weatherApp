import React from 'react';
import PropTypes from 'prop-types';

const Location = (props) => {
    //Detructuring: En lugar de usar const city = props.city; , usamos directamente:
    const {city} = props;
    
    return (
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    )
}

Location.propType = {
    city: PropTypes.string.isRequired,
}

export default Location;