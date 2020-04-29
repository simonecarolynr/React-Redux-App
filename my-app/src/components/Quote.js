import React from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions/index';

const Quote = ({ getQuote, quote, isFetching, error }) => {
    if (error !== "")
      return (
        <div>
          <h2>{error}</h2>
          <button onClick={getQuote}>Generate</button>
        </div>
      );
  
    if (isFetching) {
      return <h2>Fetching a quote now :)</h2>;
    } else {
      return (
        <div>
          <h2>{quote} -Ron Swanson</h2>
          <button onClick={getQuote}>Generate</button>
        </div>
      );
    }
    
};

const mapStateToProps = state => {
    return {
      quote: state.quote,
      isLoading: state.isLoading,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getQuote }
  )(Quote);