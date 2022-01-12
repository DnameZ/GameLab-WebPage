import styled from 'styled-components';

import { Images,Colors } from '../../Assets/Lib/GeneralStyles';

export const SideContainer=styled.div`
    display:flex;
    width:50vw;
    height:100vh;
    background-image: ${props => `url(${props.background})`};
    background-size: contain;
    background-repeat: repeat;
    border-radius: 0 30% 30% 0;`;

export const SideContainerTitle=styled.h1`
    margin-left:20px;
    margin-top:30px;
    color:${Colors.White};
    font-weight: 800;
    font-size: 100px;`;


