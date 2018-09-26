import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Order extends Component {
    render() {
        const orderList = this.props.orders.map(order =>
            <tr key={order.id}>
                <td>{order.id}<Button bsStyle="link" onClick={() => this.props.deleteOrder(order.id)}>Delete</Button></td>
                <td>{order.device}</td>
                <td>{order.location}</td>
                <td>{order.service}</td>
                <td>{order.notes}</td>
            </tr>    
        )

        const emptyMessage = (
            <tr>
                <td>There are no open orders to complete!</td>
            </tr>
        )

        return (
            <tbody>
                {orderList.length === 0 ? emptyMessage : orderList }
            </tbody>
        )
    }
}

export default Order;
