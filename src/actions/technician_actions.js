import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

const getTechnician = techs => {
    return { type: 'GET_TECHNICIANS', techs }
}

const addTechnician = tech => {
    return { type: 'ADD_TECHNICIAN', tech }
}

const destroyTechnician = tech => {
    return { type: 'DELETE_TECHNICIAN', id: tech }
}

export const createTechnician = technician => dispatch => {
    return fetch(`${API_URL}/technicians`, {
        method: 'POST',
        body: JSON.stringify({ technician
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(technician => dispatch(addTechnician(technician)))
    // .then(technicians => dispatch(fetchTechnicians(technicians)))
    .catch(error => console.log(error))
}
