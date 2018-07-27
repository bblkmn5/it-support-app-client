const OrderService = {
  fetchOrders: () => {
    return fetch('/orders')
      .then(response => response.json())
  }
}

export default OrderService;