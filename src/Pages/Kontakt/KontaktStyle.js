import styled from "styled-components";

import { Colors } from "../../Assets/Lib/GeneralStyles";

export const ContactContainer=styled.div`
    display:flex;
    width:70%;
    height:100%;
    justify-content:center;
    `;

export const ContactButton=styled.button`
    margin-top:1%;
    border-radius: 300px;
    transition: transform .3s ease-out;
    font-weight:bold;
    background-color:${Colors.Black};
    border:none;
    color:${Colors.TextColor};
    height:16%;
    width:9%;
    position:absolute;
    z-index:1;

    &:hover
    {
        box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.25);
        transform: scale(1.2);
        transition: all .2s ease-in;
        background-color:${Colors.HoverColor};
        cursor:pointer;
        color:${Colors.White};
    }
    &:active
    {
        box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.25);
        transition: all .2s ease-in;
        transform: scale(0.8);
    }
    &:last-child
    {
        align-self:flex-end;
        margin-bottom:2%;
    }`;

export const Form=styled.form`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-self:center;
    width:50%;
    height:50%;`;

export const Input=styled.input`
    background-color:${Colors.Black};
    border-radius:6px;
    outline:none;
    color:${Colors.TextColor};
    text-align:center;
    margin-top:5%;
    width:60%;
    height:8%;
    
    &:focus
    {
        outline: solid 3px ${Colors.OutlineInput};
    }`;

export const TextArea=styled.textarea`
    background-color:${Colors.Black};
    border-radius:10%;
    outline:none;
    color:${Colors.TextColor};
    text-align:center;
    margin-top:5%;
    width:60%;
    height:40%;

    &:focus
    {
        outline: solid 3px ${Colors.OutlineInput};
    }`;

export const WebContainer=styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    width:10%;
    height:40%;
   `;

export const WebPhoto=styled.img`
    cursor:pointer;
    padding:5%;
    width:60%;
    height:20%;
    
    &:hover
    {
        transform: scale(1.2);
        transition: all .2s ease-in;
    }`;