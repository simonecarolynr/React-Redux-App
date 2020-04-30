import React from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions/index';
import styled from 'styled-components';

const StyledQuote = styled.p `
  font-size: 2em;
  text-align: center;

`

const StyledButton = styled.button `
  border: 3px solid white;
  width: 200px;
  height: 75px;
  border-radius: 15px;
  background: none;
  color: white;
  font-size: 1em;
  justify-content: center;
  display: flex;
  margin: 0 auto;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    border: none;
  }

`

const Quote = ({ error, quote, getQuote }) => {



  if (error) {
    return (
      <alert>{error}</alert>
    )
  } else {
    return (
      <div>
        <StyledQuote>"{quote}"</StyledQuote>
        <StyledButton onClick={getQuote}>Generate</StyledButton>
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
    { getQuote : getQuote }
  )(Quote);