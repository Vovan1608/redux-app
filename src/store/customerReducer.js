const defaultState = {
    customers: []
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] };

        case DELETE_CUSTOMER:
            return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) };

        default:
            return state;
    }
};