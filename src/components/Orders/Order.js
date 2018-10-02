import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import TableData from './OrderTable';

class Order extends Component {
    render() {
        const orderList = this.props.orders.orders.map(order =>
            <tr key={order.id}>
                <TableData to={<Order order={order} />}>{order.id}<Button bsSize="small" onClick={() => this.props.deleteOrder(order.id)}>Delete</Button></TableData>
                <TableData to={<Order order={order}/>}>{order.device}</TableData>
                <TableData to={<Order order={order}/>}>{order.location}</TableData>
                <TableData to={<Order order={order}/>}>{order.service}</TableData>
                <TableData to={<Order order={order}/>}>{order.notes}</TableData>
            </tr>    
        )

        const emptyMessage = (
            <tr>
                <td>There are no open orders to complete!</td>
            </tr>
        )

        return (
            <tbody>
                { orderList.length === 0 ? emptyMessage : orderList }
            </tbody>
        )
    }
}

export default Order;
