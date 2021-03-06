import styled from 'styled-components';

import { Images,Colors } from '../../Assets/Lib/GeneralStyles';

export const SideContainer=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:50vw;
    height:100%;
    background-color: ${props => `${props.Backcolor}`};
    background-image: ${props => `url(${props.background})`};
    background-position: center;
    background-size: contain;
    background-repeat: repeat;
    border-radius: 0 30% 30% 0;`;

export const SideContainerTitle=styled.h1`
    margin-left:20px;
    margin-top:30px;
    color:${Colors.White};
    font-weight: 800;
    font-size: 100px;`;


