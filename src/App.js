import React from 'react';
import { Navbar, Container   } from 'react-bootstrap';
import Menu from './components/MenuComponent'
import './App.css';

function App() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Ristorante Con Fusion</Navbar.Brand>
        </Container>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
