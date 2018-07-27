const API_URL = process.env.REACT_APP_API_URL;

const OrderService = {
  fetchOrders() {
    return fetch(`${API_URL}/orders`)
      .then(response => response.json())
  },

  createOrder(order) {
    const request = {
      method: 'POST',
      body: JSON.stringify({
        order: order
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    };

    return fetch(`${API_URL}/orders`, request)
    .then(response => response.json())
  }
}

export default OrderService;