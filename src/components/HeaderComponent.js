import React, { Component } from "react";
import { Container, Navbar, Jumbotron, Row, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect variant="dark" expand="md">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Item>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row className="row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </Row>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

export default Header;
