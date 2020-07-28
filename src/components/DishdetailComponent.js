import React, { Component } from 'react'
import { Card, Row } from 'react-bootstrap'

class Dishdetail extends Component {
    constructor(props) {
        super(props)
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card style={{width:"100%"}}>
                    <Card.Img src={dish.image} alt={dish.name} />
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

    renderComments(comments) {
        if (comments != null){
            comments = comments.map((x) => {
                const id = x.id
                const author = x.author
                const comment = x.comment
                let date = new Date(x.date)
                let o = new Intl.DateTimeFormat("en" , {
                    dateStyle: "medium"
                  });
                date = o.format(date).toString();
                return (
                    <div key={id} className="mt-4">
                        <li>{comment}</li>
                        <li>-- {author}, {date}</li>
                    </div>
                );
            })
            return(
                <div>
                    <h3>Comments</h3>
                    <ul className="list-unstyled">
                    { comments }
                    </ul>  
                </div>
            )
        } else {
            return(
                <div></div>
            ) 
        }
    }

    render() {
        const dish = this.props.dish
        let comments = null
        if (dish != null) {
            comments = dish.comments
        }
        return (
            <Row>
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(comments)}
                </div> 
            </Row>    
        )
    }
}

export default Dishdetail