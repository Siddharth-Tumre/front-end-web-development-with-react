import React from "react";
import {
  Card,
  Row,
  Container,
  Breadcrumb,
  BreadcrumbItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Img src={dish.image} alt={dish.name} />
        <Card.Body>
          <Card.Title>{dish.name}</Card.Title>
          <Card.Text>{dish.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

const RenderComments = ({ comments }) => {
  if (comments != null) {
    comments = comments.map((x) => {
      const id = x.id;
      const author = x.author;
      const comment = x.comment;
      const date = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(new Date(Date.parse(x.date)));
      return (
        <div key={id} className="mt-4">
          <li>{comment}</li>
          <li>
            -- {author}, {date}
          </li>
        </div>
      );
    });
    return (
      <div>
        <h3>Comments</h3>
        <ul className="list-unstyled">{comments}</ul>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const Dishdetail = (props) => {
  return (
    <Container>
      <Row>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </Row>
      <Row>
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
        </div>
      </Row>
    </Container>
  );
};

export default Dishdetail;
