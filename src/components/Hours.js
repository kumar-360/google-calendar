import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Hour from './Hour';
import Modal from './Modal';

const Wrapper = styled.div`
    border: 1px solid green;
    flex: 0.85;
    height: 100vh;
    overflow: scroll;
`;
const Date = styled.div`
    width: 200px;
    height: 50px;
    border: 1px solid blue;
`;

const hoursArr = new Array(24);
for (let i = 0; i < hoursArr.length; i++) {
    hoursArr[i] = {};
    hoursArr[i].from = i;
    hoursArr[i].to = i + 1;
}

const Hours = ({ date }) => {
    const [showCreationModal, setShowCreationModal] = useState(false);
    const [events, setEvents] = useState([]);
    const indexRef = useRef(null);

    useEffect(() => {
        if (localStorage.getItem('google--calendar')) {
            setEvents([...JSON.parse(localStorage.getItem('google--calendar'))]);
        }
    }, []);

    const handleClick = (e, index) => {
        e.stopPropagation();
        setShowCreationModal(true)
        indexRef.current = index;
    }

    return (
        <Wrapper>
            <Date>{date}</Date>
            {hoursArr.map((item, index) => <Hour key={index} time={index < 23 ? index + 1 : ''} handleClick={(e) => handleClick(e, index)} setShowCreationModal={setShowCreationModal} index={index} events={events} />)}
            {showCreationModal && <Modal setShowCreationModal={setShowCreationModal} events={events} setEvents={setEvents} index={indexRef.current} fromMain={hoursArr[indexRef.current].from} toMain={hoursArr[indexRef.current].to} />}
        </Wrapper>
    );
};

export default Hours;