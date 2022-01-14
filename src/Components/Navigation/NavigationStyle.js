import styled from "styled-components";

import { Colors,Images } from "../../Assets/Lib/GeneralStyles";

export const NavigationContainer=styled.div`
    display:flex;
    position:absolute;
    justify-content:flex-start;
    margin-right:6%;
    width:38%;
    height:6%;
    border-style: solid;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.25);
    border-color: ${Colors.Black};
    border-top-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-radius: 0px 0px 20px 20px;`;

export const HomePageButton=styled.button`
    border-radius:0 0 0 20px;
    transition: transform .3s ease-out;
    border:none;
    font-weight:bold;
    background-color:${Colors.Black};
    color:${Colors.White};
    width:31%;
    height:100%;
    
    &:hover
    {
        transform: scale(0.9);
        transition: all .2s ease-in;
        cursor:pointer;
        color:${Colors.TextColor};
    }
    &:active
    {
        transition: all .1s ease-in;
        color:${Colors.TextColor};
        transform: scale(1);
    }`;

    export const Select=styled.select`
        border:none;
        text-align: center;
        font-weight:bold;
        border-radius:15px;
        width:23%;
        height:100%;
        color:${Colors.TextColor};
        -webkit-appearance: none;
        
        
        &:focus
        {
            outline:none;
            border:none;
        }`;

    export const Option=styled.option`
        font-weight:bold;
        color:${Colors.TextColor};`;