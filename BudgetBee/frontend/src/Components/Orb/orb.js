import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {

    const {width, height} = useWindowSize()
    console.log(width, height)

    const moveOrb = keyframes`
    0%{
        transform: translate(10px, 1000px);
    }
    50%{
        transform: translate(${width/1.2}px, ${height/1.5}px);
    }
    100%{
        transform: translate(0, 0);
    }    
    `

    const OrbStyled = styled.div`
        height: 70vh;
        width: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg,rgb(249, 252, 16) 0%,rgb(59, 231, 114) 100%);
        filter: blur(300px);
        animation: ${moveOrb} 5s alternate linear infinite;
    `;

    return(
        <OrbStyled>
        </OrbStyled>
    )
}
export default Orb