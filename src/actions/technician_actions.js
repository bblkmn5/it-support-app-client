import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

const getTechnicians = technicians => {
    return { type: 'GET_TECHNICIANS', technicians }
}

export const fetchTechnicians = () => dispatch => {
    return fetch(`${API_URL}/technicians`)
        .then(response => response.json())
        .then(technicians => dispatch(getTechnicians(technicians)))
        .catch(error => console.log(error))
}
