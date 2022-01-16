import styled from "styled-components";

export const BraillepageContinaer=styled.div`
display:flex;
justify-content:flex-end;
widht:100vw;
height:100vh;
`;

export const VideoContainer=styled.div`
    display:flex;
    gap:100px;
    align-self:center;
    justify-content:center;
    align-items:center;
    width:50%;
    height:50%;`;



export const Videos=styled.iframe`
    border-radius:20px; 
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
