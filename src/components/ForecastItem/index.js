import React from 'react';
import PropTypes from 'prop-types';

const ForecastItem = () => (
    <div>{weekDay}</div>
)

ForecastItem.PropTypes = {
    weekDay : PropTypes.string.isRequired,
}

export default ForecastItem;