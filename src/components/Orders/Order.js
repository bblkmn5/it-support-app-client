import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Order extends Component {
    constructor(props) {
        super(props)

        this.state = {
            likedOrder: 0
        }
        this.handleLike = this.handleLike.bind(this);
    } 

    handleDelete = () => {
        window.confirm("Are you sure you have completed this order? It will be deleted") &&
        this.props.onDelete(this.props.order.id)
    }
    
    handleLike () {
        
        this.setState({
             likedOrder: this.state.likedOrder + 1
        })
    }
    render(){
        const { props } = this;

        return (
            <tr>
                <td>{props.order.id}</td>
                <td>{props.order.device}</td>
                <td>{props.order.deviceType}</td>
                <td>{props.order.location}</td>
                <td>{props.order.service}</td>
                <td>{props.order.technician}</td>
                <td>{props.order.notes}</td>
                <td><Button bsSize="small" onClick={this.handleDelete}>Complete</Button></td>
                <td><Button bsSize="small" onClick={this.handleLike}>Like</Button>Count: {this.state.likedOrder}</td>
            </tr>    
        )
    }
}

export default Order;
