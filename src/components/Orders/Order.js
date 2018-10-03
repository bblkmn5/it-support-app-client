import React from 'react';
import { Button } from 'react-bootstrap';

function Order(props){
    const handleClick = () => props.onClick(props.order.id)
    const handleDelete = () => {
        props.onDelete(props.order.id)
    }

    return (
        <tr>
            <td onClick={handleClick}>{props.order.id}</td>
            <td onClick={handleClick}>{props.order.device}</td>
            <td onClick={handleClick}>{props.order.location}</td>
            <td onClick={handleClick}>{props.order.service}</td>
            <td onClick={handleClick}>{props.order.notes}</td>
            <td><Button bsSize="small" onClick={handleDelete}>Delete</Button></td>
        </tr>    
    )
}

export default Order;
