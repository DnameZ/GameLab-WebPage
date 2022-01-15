import styled from "styled-components";

export const ContentContainer=styled.div`
    display:flex;
    flex-wrap:wrap;
    align-self:flex-end;
    justify-content:center;
    margin-left:290px;
    width:50%;
    height:70%;`;

export const Photo=styled.img`
    cursor:pointer;
    margin-right:15%;
    width:35%;
    height:35%;
    
    &:hover
    {
        transform:scale(1.2);
        transition: all .2s ease-in;
    }`;

export const textContainer=styled.div`
    display:flex;

    background-color:blue;
    align-self:flex-end;
    justify-content:center;
    width:50%;
    height:70%;`;


export const Content=styled.p`
    text-align: justify;
    font-weight:bold;
    font-size: 20px;`;
