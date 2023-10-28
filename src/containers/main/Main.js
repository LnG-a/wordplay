import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import playBtnImg from '../../imgs/play_btn.png';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    color: #f4f6f6;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #180324;
`;

const Img = styled.img`
    width : 50vw;
    height : 20vw;

    :hover {
        box-shadow: inset 0 0 100px 100px rgba(158, 132, 173, 0.5);
    }
`;

let isAsked = [];

const Main = () => {
    
    const nav = useNavigate();

    isAsked = [];
    for (let i = 0; i < 20; i++) {
        isAsked.push(false)
    }

    const Start = () => {
        nav("/play/1")
    }

    return(
        <Wrapper>
            <Img src={playBtnImg} alt='play button' onClick={ Start }/>
        </Wrapper>
    )
}

export { isAsked };
export default Main;

