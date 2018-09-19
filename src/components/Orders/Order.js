import React from 'react';

const Order = ({ order }) => (
        <tr>
            <td>{order.id}</td>
            <td>{order.device}</td>
            <td>{order.location}</td>
            <td>{order.service}</td>
            <td>{order.notes}</td>
        </tr>
)

export default Order;