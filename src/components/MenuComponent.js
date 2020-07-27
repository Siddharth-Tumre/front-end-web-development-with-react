import React, { Component } from 'react';
import { Container, Row, Card } from 'react-bootstrap';

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish})
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <Card.Img width="100%" src={dish.image} alt={dish.name} />
                    <Card.Body>
                        <Card.Title>{dish.name}</Card.Title>
                        <Card.Text>{dish.description}</Card.Text>
                    </Card.Body>
                </Card>
            )
        } else {
            return(
                <div></div>
            )
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <Card.Img width="100%" src={dish.image} alt={dish.name} />
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
                <Row>
                    {this.renderDish(this.state.selectedDish)}
                </Row>
            </Container>
        );
    }
}

export default Menu;