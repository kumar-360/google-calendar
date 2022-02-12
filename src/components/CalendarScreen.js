import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import Hours from './Hours';

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
`;

const CalendarScreen = () => {
    const [date, setDate] = useState(new Date().toUTCString());

    return (
        <Wrapper>
            <Calendar date={date} setDate={setDate} />
            <Hours date={date} />
        </Wrapper>
    );
};

export default CalendarScreen;