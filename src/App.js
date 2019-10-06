import React, { Component } from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities = [
  "inverness,uk",
  "valencia,spain",
  "bogota,col",
  "madrid,spain"
]

class App extends Component {
  render() {
    return (
      <div className="app">
        <LocationList cities={cities}></LocationList>
      </div>
    )
  }
}

export default App;
