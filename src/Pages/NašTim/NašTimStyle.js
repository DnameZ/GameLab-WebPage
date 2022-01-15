import styled from 'styled-components';


export const NašTimPageContainer=styled.div`
    display:flex;
    perspective: 1000px;
    justify-content:flex-end;
    widht:100vw;
    height:100vh;
`;

export const GroupContainer=styled.div`
    display:flex;
    justify-content:center;
    align-self:flex-end;
    width:50%;
    height:80%;`;

export const HeadOfLab=styled.div`
    display:flex;
    right:25.5%;
    justify-content:center;
    align-items:center;
    position:absolute;
    width:6%;
    height:14%;
    box-shadow: 1px 1px 2px 2px #ff0000;
    border-radius: 80px;`;

export const DataContainer=styled.div`
    display:grid;
    position:relative;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);
    width:100%;
    align-self:flex-end;
    height:70%;
    background-color:white;
    border-radius: 80px;
    `;

export const LabMemInner=styled.div`
    position: relative;
    transform: translate(30%,0%);
    transform-style: preserve-3d;
    transition: transform 500ms;
    &.flipped
    {  
        transform: rotateY(180deg);
    }
    `;

export const LabMemFront=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    cursor:pointer;
    z-index:1;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility:    hidden;
    -ms-backface-visibility:     hidden;
    width:70%;
    height:55%;
    box-shadow: 1px 1px 2px 2px #ff0000;
    border-radius: 80px;

    
    `;

export const LabMemBack=styled.div`
    position:absolute;
    text-align:center;
    cursor:pointer;
    z-index:2;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility:    hidden;
    -ms-backface-visibility:     hidden;
    width:70%;
    height:55%;
    transform: rotateY( -180deg );
    box-shadow: 1px 1px 2px 2px #ff0000;
    border-radius: 80px;

  
    `;

export const UserPhoto=styled.img`
    width:70%;
    height:70%;`;



