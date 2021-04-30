import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments != null) {
            const comm = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                        </p>
                    </li>
                )
            });

            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                        {comm}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const dish = this.props.dish

        console.log(dish);

        if (dish == null) {
            return (<div></div>);
        }

        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);

        return (
            <div className='container'>
                <div className='row'>
                <div className="col-12 col-md-5 m-1">
                    {dishItem}
                </div>
                {dishComment}
                </div>
            </div>
            
        )
    }
}

export default DishDetail;