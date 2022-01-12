import styled from "styled-components";
import GamePady from "../../Assets/Images/GamePadEdited.jpg";
import HomePage from "../../Assets/Images/HomepageButton.png";

export const Colors={
    White:"#ffff",
    Black:"#000000",
    TextColor:"#2483FF",
    HoverColor:"#0077FF"

};


export const Images={
    GamePadImg:`${GamePady}`,
    HomePageButton:`${HomePage}`
};

export const OnlyButton=styled.button`
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
    }`;