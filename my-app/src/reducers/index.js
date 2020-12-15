import { FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAILURE } from '../actions/index';

const initialState = {
    quote: `Dear frozen yogurt, you are the celery of desserts. Be ice cream, or be nothing.`,
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {

    
    switch(action.type) {
        case FETCHING_QUOTE_START:
            return {
                ...state,
                isLoading: true,
            };
        case FETCHING_QUOTE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                quote: action.payload
            };
        case FETCHING_QUOTE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: "Oops! There's been an error. Try refreshing the page."
            };
        default:
            return state;
    };
};