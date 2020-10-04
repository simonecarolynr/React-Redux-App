import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const TodaysDate = () => {

    const StyledDate = styled.p `
        padding: 15px;
        margin: 0px;
    `

    let today = format(new Date(), "'Today is ' iiii" );

    return (
    <StyledDate>{today}</StyledDate>
    )
};

export default TodaysDate;
