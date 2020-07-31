import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';

const RenderMenuItem = ({dish, onClick}) => {
    return(
        <Card onClick={() => onClick(dish.id)}>
            <Card.Img width="100%" src={dish.image} alt={dish.name} />
            <Card.ImgOverlay>
                <Card.Title>{dish.name}</Card.Title>
            </Card.ImgOverlay>
        </Card>
    )
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <Container>
            <Row>
                {menu}
            </Row>
        </Container>
    );
}

export default Menu;