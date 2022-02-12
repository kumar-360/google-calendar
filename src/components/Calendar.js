import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid red;
    flex: 0.15;
    height: 100vh;
`;

const Calendar = ({ date, setDate }) => {
    return (
        <Wrapper>
            {/* <input type='date' value={date} onChange={(e) => setDate(e.target.value)} /> */}
        </Wrapper>
    );
};

export default Calendar;