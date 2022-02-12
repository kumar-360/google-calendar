import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    border: 1px solid red;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(136,137,138,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    width: 500px;
    height: 600px;
    border: 1px solid blue;
    background: peachpuff;
    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        button {
            cursor: pointer;
        }
    }
`;

const Modal = ({ setShowCreationModal, events, setEvents, index, fromMain, toMain }) => {
    const [name, setName] = useState('');
    const [from, setFrom] = useState(fromMain <= 12 ? fromMain + (fromMain < 12 ? ' AM' : ' PM') : fromMain - 12 + (fromMain < 12 ? ' AM' : ' PM'));
    const [to, setTo] = useState(toMain <= 12 ? toMain + (toMain < 12 ? ' AM' : ' PM') : toMain - 12 + (toMain < 12 ? ' AM' : ' PM'));

    const handleClick = (e) => {
        e.stopPropagation();
        setShowCreationModal(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowCreationModal(false);
        let tempEvents = [...events, { name, from, to, index }];
        setEvents(tempEvents);
        localStorage.setItem('google--calendar', JSON.stringify(tempEvents));
    }

    return (
        <Wrapper onClick={() => setShowCreationModal(false)}>
            <Content onClick={handleClick}>
                <form onSubmit={handleSubmit}>
                    <span>Event Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} /></span>
                    <span>From: <input type='text' value={from} onChange={(e) => setFrom(e.target.value)} disabled /></span>
                    <span>To: <input type='text' value={to} onChange={(e) => setTo(e.target.value)} disabled /></span>
                    <button>Submit</button>
                </form>
            </Content>
        </Wrapper>
    );
};

export default Modal;