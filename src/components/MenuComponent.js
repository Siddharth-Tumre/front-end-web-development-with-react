import React, { Component } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import Dishdetail from './DishdetailComponent'

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

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
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
                <Dishdetail dish={this.state.selectedDish} />
            </Container>
        );
    }
}

export default Menu;