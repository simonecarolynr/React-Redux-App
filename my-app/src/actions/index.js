import axios from 'axios';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAILURE = 'FETCHING_QUOTE_FAILURE';

export const getQuote = () => dispatch => {
    console.log('hello')
    dispatch({ type: FETCHING_QUOTE_START });

    axios
    .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(res => {  
        console.log(res.data)
        let randomQuote = res.data;

        dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: randomQuote});
    })
    .catch(err => {
        console.log(err)
              
        dispatch({
            type: FETCHING_QUOTE_FAILURE,
            payload: `${err.statusText} with response code ${err.status}`
        })
    })
};
