import React from 'react';

function Technician(props) {
    
    return (
        <tr>
            <td>{props.technician.name}</td>
            <td>{props.technician.maxOrders}</td>
            <td>{props.technician.notes}</td>
        </tr>    
    )
}

export default Technician;
