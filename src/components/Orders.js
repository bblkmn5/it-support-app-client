import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const Orders = ({ orders }) => {
  console.log(this.state)
  const renderOrders = orders.map(order =>
    <Router>
      <p key={order.id}>{order.device}-{order.location}-{order.service}-{order.notes}</p>
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