import React from 'react';

const Orders = ({ orders } ) => {
  const renderOrders = orders.map((order) =>
    <p key={order.id}>{order.device}</p>
  )

  return (
    <div>{renderOrders}</div>
  )
}

export default Orders;