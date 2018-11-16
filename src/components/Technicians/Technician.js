import React from 'react';
import { Button } from 'react-bootstrap';

function Technician(props) {

    const handleDelete = () => {
        window.confirm("Are you sure you wish to delete this item?") &&
        props.onDelete(props.technician.id)
    }

    return (
        <tr>
            <td>{props.technician.id}</td>
            <td>{props.technician.device}</td>
            <td>{props.technician.location}</td>
            <td>{props.technician.service}</td>
            <td>{props.technician.notes}</td>
            <td><Button bsSize="small" onClick={handleDelete}>Delete</Button></td>
        </tr>    
    )
}

export default Technician;
