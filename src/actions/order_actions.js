import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

const getOrders = orders => {
    return { type: 'GET_ORDERS', orders }
}

const addOrder = order => {
    return { type: 'ADD_ORDER', order }
}

export const fetchOrders = () => dispatch => {
    return fetch(`${API_URL}/orders`)
        .then(response => response.json())
        .then(orders => dispatch(getOrders(orders)),
        console.error
    )
}

export const createOrder = order => dispatch => {
    return fetch(`${API_URL}/orders`, {
        method: 'POST',
        body: JSON.stringify({ order
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(order => dispatch(addOrder(order)),
    console.error
    )
}
