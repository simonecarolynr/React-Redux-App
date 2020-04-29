import React from 'react';

const TodaysDate = () => {

    let today = new Date();
    let date = today.toString();

    return (
    <h3>{date}</h3>
    )
};

export default TodaysDate;
