import React from 'react';

const Orders = ({ orders }) => {
  console.log(this.state)
  const renderOrders = orders.map(order =>
    <p key={order.id}>{order.device}</p>
  )

  return (
    <div>
      <h3>Current Orders</h3>
        {renderOrders}
    </div>
  )
}

export default Orders;