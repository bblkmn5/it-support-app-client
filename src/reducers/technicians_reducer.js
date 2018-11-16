const initialState = {
    technicians: []
}

const techniciansReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_TECHNICIANS':
            return {
                ...state,
                technicians: action.technicians };
        case 'ADD_TECHNICIANS':
            return {
                ...state, 
                technicians: state.technicians.concat(action.technician) };
        case 'DELETE_TECHNICIANS':
            return {
                ...state,
                technicians: state.technicians.filter(technician => technician.id !== action.id) };
        default:
            return state;
    }
}

export default techniciansReducer;