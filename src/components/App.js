import React from 'react';
import Navigation from './Navigation';
import '../App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Background from './Background';
import SpaceWeather from './SpaceWeather';
import AmazonTrip from './AmazonTrip';
import TeslaAd from './TeslaAd';
import Info from './Info'
import Photo from './Photo'

function App() {
  return (
    <div className="App">
      <Navigation/>

      <Container>
        <Row>
          <Col lg={2}><SpaceWeather/></Col>
          <Col lg={8}><Photo/></Col>
          <Col lg={2}><TeslaAd/></Col>
        </Row>
      </Container>

      <AmazonTrip/>
      <Info/>
    </div>
  );
}

export default App;
