import React from 'react'
import { Card, Row, Container } from 'react-bootstrap'

    const RenderDish = ({dish}) => {
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

    const RenderComments = ({comments}) => {
        if (comments != null){
            comments = comments.map((x) => {
                const id = x.id
                const author = x.author
                const comment = x.comment
                const date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(x.date)))
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

    const Dishdetail = (props) => {
        const dish = props.dish
        let comments = null
        if (dish != null) {
            comments = dish.comments
        }
        console.log(dish)
        return (
            <Container>
                <Row>
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={comments} />
                    </div> 
                </Row>    
            </Container>
        )
    }

export default Dishdetail