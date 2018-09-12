import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const Orders = ({ orders }) => {
  console.log(this.state)
  
  const renderOrders = orders.map(order =>
    <Router>
      <p key={order.id}>{order.device}-{order.location}-{order.service}</p>
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
  