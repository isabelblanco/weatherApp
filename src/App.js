import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import 'typeface-roboto';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';
import ForecastExtended from './components/ForecastExtender';

const cities = [
  "El Cairo,mx",
  "Valencia,spain",
  "Marrakech,ma",
  "Madrid,spain"
]

class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }
  handleSelectionLocation = city => {
    // this.setState({ city:city });
    this.setState({ city });
  }

  render() {
    const {city} = this.state;
    return (
      <Grid fluid>
        <Row>
          <AppBar position='static'>
            <Toolbar position='sticky'>
              <Typography variant='subtitle1' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6} className='locationList'>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className='details'>
                {
                  city && 
                    // <h1>No se seleccionó ningún valor</h1> :
                    //null :
                    <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App;
