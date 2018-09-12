import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Table } from 'react-bootstrap'
const Orders = ({ orders }) => {
  const renderOrders = orders.map(order =>
    <Router>
      <Table responsive striped bordered condensed hover>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Device</th>
            <th>Location</th>
            <th>Service Type</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{order.id}</td>
            <td>{order.device}</td>
            <td>{order.location}</td>
            <td>{order.service}</td>
            <td>{order.notes}</td>
          </tr>
        </tbody>
      </Table>
    </Router>
  )

  return (
    <div>
      <h3>Current Orders</h3>
        {renderOrders}
    </div>
  )
}

export default Orders;

//need to add delete button to delete order when completed.
  //don't think I need a class/constructor, but arrow function. Else, just render on order page .forEach order.
  //Therefore, do not even need a component for delete. look up lecture for how to add delete button to each instance
  //of an order, then render the current list of orders minus the deleted order without page refresh
  