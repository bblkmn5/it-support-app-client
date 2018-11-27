const initialState = {
    technicians: []
}

const techniciansReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_TECHNICIANS':
            return {
                ...state,
                technicians: action.technicians };
        default:
            return state;
    }
}

export default techniciansReducer;