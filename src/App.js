import React, {Component} from 'react';
import LocationListContainer from './containers/LocationListContainer';
import './App.css';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const CITIES = [
  'Telde,es',
  'Provincia de Las Palmas,es',
  'Vega de San Mateo,es',
  'Barcelona,es',
  'Madrid,es',
  'Birmingham,uk',
  'London,uk',
  'Oxford,uk',
  'Manchester,uk',
  'Moscow,ru',
  'Rovaniemi,fi'
];

class App extends Component{

  render() {

    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
                <Typography variant="inherit" color="inherit">
                  Weather App
                </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer 
              cities={CITIES}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div elevation={4} className="details">
                <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );

  }

}

export default App;
