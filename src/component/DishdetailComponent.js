import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Dishdetail extends Component{
  
    renderDish(dish) {
        if (dish != null)
            return(
                <>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1" >
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </>
            );
        else
            return(<div></div>);
    }
    render(){
        const {dish} = this.props;
        return(
            <div className='row'>
                {this.renderDish(dish)}
            </div>
        )
    }
    renderComments(comments){
        if (comments!=null){
            const com = comments.map(co=>{
                return(
                    <>
                        <li>{co.comment}</li><br />
                        <li>-- {co.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(co.date)))}</li><br />
                    </>
                )
            });
            return(
                <ul className="list-unstyled">{com}</ul>
            )
        }
        else{
            return(<div></div>)
        }
    }
}
export default Dishdetail;