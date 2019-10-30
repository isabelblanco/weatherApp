import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
// import './styles.css';

import {
    CLOUDY,
    SUN,
    RAIN, 
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weathers';

const icons = {
    [SUN]: "day-sunny",
    [CLOUDY]: "cloudy",
    [RAIN]:"rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers"
};

const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];
    const sizeIcon = "4x";

    if (icon) {
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>
    } else {
        return <WeatherIcons className="wicon" name={'day-sunny'} size={sizeIcon}></WeatherIcons>
    }
};

const WeatherTemperature = ({ temperature, weatherState }) => (

    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`ºC`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherTemperature;