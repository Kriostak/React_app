import * as actionTypes from './actions';

const initialState = {
    login: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                login: action.loginData
            };
        default: 
            return state;
    }
};

export default reducer;