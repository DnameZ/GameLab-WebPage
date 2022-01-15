import styled from "styled-components";

export const RTSpageContinaer=styled.div`
    display:flex;
    justify-content:flex-end;
    widht:100vw;
    height:100vh;
    `;

export const VideoContainer=styled.div`
    display:flex;
    justify-content:space-evnely;
    align-self:flex-end;
    width:50%;
    height:80%;`;

export const Videos=styled.iframe`
    border-radius:20px; 
    margin-left:1%;
    border:none;
    box-shadow: 1px 1px 2px 2px #ff0000;
    width:39%;
    height:315px;

    &:first-child
    {
        align-self:flex-end;
        margin-bottom:5%;
    }
    
    &:last-child
    {
        align-self:flex-end;
        margin-bottom:5%;
        
    }`;