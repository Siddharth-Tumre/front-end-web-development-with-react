import React, { Component } from 'react';
import { Navbar, Container   } from 'react-bootstrap';
import Menu from './components/MenuComponent'
import './App.css';
import { DISHES } from './shared/dishes'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES
    }
  }
  render(){
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Ristorante Con Fusion</Navbar.Brand>
          </Container>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
