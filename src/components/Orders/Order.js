import React from 'react';
import { Button } from 'react-bootstrap';

function Order(props){
    // const handleClick = () => props.onClick(props.order)
    const handleDelete = () => {
        window.confirm("Are you sure you wish to delete this item?") &&
        props.onDelete(props.order.id)
    }

    return (
        <tr>
            <td>{props.order.id}</td>
            <td>{props.order.device}</td>
            <td>{props.order.location}</td>
            <td>{props.order.service}</td>
            <td>{props.order.notes}</td>
            <td><Button bsSize="small" onClick={handleDelete}>Delete</Button></td>
        </tr>    
    )
}

export default Order;
