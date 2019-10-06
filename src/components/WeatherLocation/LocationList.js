import React from "react";
import WeatherLocation from "./../WeatherLocation";
import PropTypes from 'prop-types';


const LocationList = ({ cities }) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        //onSelectedLocation(city);
    }
    const strComponents = cities => (
        cities.map(city => 
            (
                <WeatherLocation 
                    key={city} 
                    city={city}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)}
                ></WeatherLocation>
            )
        )
    );
    
    return (<div>
        {strComponents(cities)}
    </div>)
}

LocationList.propTyes = {
    cities: PropTypes.array.isRequired,
}
export default LocationList;
