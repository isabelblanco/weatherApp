import {
    SUN, 
    CLOUDY,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,

} from './../constants/weathers';

const getWeatherState = weather => {
    const { id }= weather;

    switch (id) {
        case id < 300:
            return THUNDER;
        case id < 400:
            return DRIZZLE;
        case id < 600:
            return RAIN;
        case id < 700:
            return SNOW;
        case id < 800:
            return SUN;
        default:
            return CLOUDY;
    }   
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const name = weather_data.name;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = temp;

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