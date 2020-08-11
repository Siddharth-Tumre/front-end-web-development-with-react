import React from "react";
import {
  Container,
  Row,
  Card,
  Breadcrumb,
  BreadcrumbItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const RenderMenuItem = ({ dish }) => {
  return (
    <Card>
      <Link to={`menu/${dish.id}`}>
        <Card.Img width="100%" src={dish.image} alt={dish.name} />
        <Card.ImgOverlay>
          <Card.Title>{dish.name}</Card.Title>
        </Card.ImgOverlay>
      </Link>
    </Card>
  );
};

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  return (
    <Container>
      <Row>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </Row>
      <Row>{menu}</Row>
    </Container>
  );
};

export default Menu;
