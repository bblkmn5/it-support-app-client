import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

const getOrders = orders => {
    return { type: 'GET_ORDERS', orders }
}

export const fetchOrders = () => dispatch => {
    return fetch(`${API_URL}/orders`)
        .then(response => response.json())
        .then(orders => dispatch(getOrders(orders)),
        console.error
    )
}