import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

const getOrders = orders => {
    return { type: 'GET_ORDERS', orders }
}

const setOrder = order_id => {
    return { type: 'SET_ORDER', order_id: order_id}
}

const addOrder = order => {
    return { type: 'ADD_ORDER', order }
}

const editOrder = order => {
    return { 
        type: 'UPDATE_ORDER',
        order: order, 
        id: order.id
    }
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

export const setCurrentOrder = order_id => dispatch => {
    return fetch(`${API_URL}/orders/${order_id}`)
        .then(response => response.json())
        .then(order => dispatch(setOrder(order)))
        .catch(error => console.log(error))
}

export const updateOrder = order => dispatch => {
    return fetch(`${API_URL}/orders/${order.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ order }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(order => dispatch(editOrder(order)))
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
    .then(orders => dispatch(fetchOrders(orders)))
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
