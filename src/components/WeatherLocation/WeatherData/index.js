import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';
import {
 WINDY, RAIN,
} from './../../../constants/weathers';

//Es lo mismo usar las dos líneas comentadas que la primera sin comentar, aunque en la primera opción habría que usar llaves e indicar el return y en la segunda no
// const WeatherData = ({ data }) => {
//     const {temperature, weatherState, humidity, wind} = data;
const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => (
    <div className="weatherDataCont">
        <WeatherTemperature 
            temperature = {temperature}
            weatherState = {weatherState}
        />
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
)

export default WeatherData;