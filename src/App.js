import React from 'react';
import logo from './logo.svg';
import { Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <div className="container">
          <Navbar.Brand href="/">Ristorante Con Fusion</Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
