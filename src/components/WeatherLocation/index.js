//Importación de React, nos permite trabajar con react aquí dentro, y también babel
import React, { Component } from 'react';
import transformWeaher from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';

//Componente de clase
class WeatherLocation extends Component {
    constructor (props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data : null,
        }
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = temp;

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;
    }

    componentDidMount() {
        console.log("cdm");
        this.handupdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("cdu");
    }

    handupdateClick = () => {
        const apiWeather = getUrlWeatherByCity(this.state.city);
        fetch(apiWeather).then( resolve => {
            return resolve.json();
        
        }).then(data => {
            const newWeather = transformWeaher(data);
            console.log(newWeather);
            //setState es palabra clave para modernizar el objeto que se declara en el constructor. Sin este método no podemos actualizar correctamente.
            this.setState({
                data: newWeather,
            });
        });
    }

    render() {
        const { onWeatherLocationClick } = this.props;
        const {city,data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                { data ? 
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress/>
                }
            </div>
        )
    }
};

WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation; 