import { ActionTypes } from "../actionTypes";

const initialState = {
    loading: false,
    data: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.HOME_DATA_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.HOME_DATA_LOADED:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;