import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';

class ForecastExtended extends Component {
    render() {
        const { city } = this.props;

        return (
            <div className="forecastExtended">
                <h2> Pronóstico Extendido para {city} </h2>
                <ForecastItem></ForecastItem>
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
}

export default ForecastExtended;