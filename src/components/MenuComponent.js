import React, { Component } from 'react';
import { Container, Row, Card } from 'react-bootstrap';


class Menu extends Component {
    constructor(props){
        super(props)
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <Card.Img src={dish.image} alt={dish.name} />
                        <Card.ImgOverlay>
                            <Card.Title>{dish.name}</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
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
}

export default Menu;