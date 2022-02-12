import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    border: 1px solid gray;
    display: flex;
`;
const Time = styled.div`
    width: 100px;
    height: 50px;
    border: 1px solid purple;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    span {
        margin: 4px;
    }
`;
const Event = styled.div`
    height: 50px;
    background: rgb(3,155,229);
    flex-grow: 1;
`;
const Delete = styled.div`
    background: red;
    max-width: fit-content;
    cursor: pointer;
    margin-top: 4px;
    margin-left: 8px;
    display: inline-block;
`;
const Edit = styled.div`
    background: green;
    max-width: fit-content;
    cursor: pointer;
    margin-top: 4px;
    display: inline-block;
`;


const Hour = ({ time, handleClick, setShowCreationModal, index, events }) => {
    const [currentEvent, setCurrentEvent] = useState({});
    const renderEvents = () => {
        events.forEach((item) => {
            if (item.index === index) {
                setCurrentEvent({ ...item });
            }
        })
    }
    useEffect(() => {
        renderEvents();
    }, [events]);

    const handleDelete = (e) => {
        e.stopPropagation();
        let tempEvents = events.filter((item) => {
            return item.index !== index;
        })
        localStorage.setItem('google--calendar', JSON.stringify(tempEvents))
        setCurrentEvent({});
        setShowCreationModal(false);
    }
    const handleEdit = () => {
        setShowCreationModal(true);
    };

    return (
        <Wrapper onClick={handleClick}>
            <Time><span>{time ? time <= 12 ? time : time - 12 : ''} {time ? time < 12 ? 'AM' : 'PM' : ''}</span></Time>
            {Object.keys(currentEvent).length > 0 && <Event onClick={() => setShowCreationModal(false)}>{`Name: ${currentEvent.name}, From: ${currentEvent.from}, To: ${currentEvent.to}`}<br/>
                <Edit onClick={handleEdit}>Edit</Edit>
                <Delete onClick={handleDelete}>Delete</Delete>
            </Event>}
        </Wrapper>
    );
};

export default Hour;