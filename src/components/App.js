import React from 'react';
import Navigation from './Navigation';
import '../App.css';
import {Container} from 'react-bootstrap';
import Background from './Background'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Background/>
      <Container>
      </Container>
    </div>
  );
}

export default App;
