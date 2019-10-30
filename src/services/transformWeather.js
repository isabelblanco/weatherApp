import {
    SUN, 
    CLOUDY,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,

} from './../constants/weathers';

const getWeatherState = weather => {
    const { id } = weather;
    let weatherState;

    switch (id) {
        case id < 300:
            weatherState = THUNDER;
            break;
        case id < 400:
            weatherState = DRIZZLE;
            break;
        case id < 600:
            weatherState = RAIN;
            break;
        case id < 700:
            weatherState = SNOW;
            break;
        case 800:
            weatherState = SUN;
            break;
        default:
            weatherState = CLOUDY;
    }

    return weatherState;
}

const transformWeather = weather_data => {
    const { humidity } = weather_data.main;
    const { speed } = weather_data.wind;
    const temperature = weather_data.main.temp.toFixed(2);
    const name = weather_data.name;
    const weatherState = getWeatherState(weather_data.weather[0]);

    const data = {
        humidity,
        temperature,
        weatherState,
        name,
        wind: `${speed} m/s`,
    }

    return data;
}

export default transformWeather;