import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

const getOrders = orders => {
    return { type: 'GET_ORDERS', orders }
}

const addOrder = order => {
    return { type: 'ADD_ORDER', order }
}

const destroyOrder = order => {
    return { type: 'DELETE_ORDER', id: order }
}

export const fetchOrders = () => dispatch => {
    return fetch(`${API_URL}/orders`)
        .then(response => response.json())
        .then(orders => dispatch(getOrders(orders)))
        .catch(error => console.log(error))
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
    .then(order => dispatch(addOrder(order)))
    .catch(error => console.log(error))
}

export const deleteOrder = id => dispatch => {
    return fetch(`${API_URL}/orders/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(order => dispatch(destroyOrder(order)))
    .then(orders => dispatch(fetchOrders(orders)))
    .catch(error => console.log(error))
}
