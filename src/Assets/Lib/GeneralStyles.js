import styled from "styled-components";

import GamePady from "../../Assets/Images/GamePadEdited.jpg";
import HomePage from "../../Assets/Images/HomepageButton.png";
import Gallery from "../../Assets/Images/GalerijaButton.png";
import GameLab from "../../Assets/Images/GamLabIcon.png";
import AboutOus from "../../Assets/Images/Onama.png";
import UserPhoto from "../../Assets/Images/Mem.png";
import GalleryPhoto from "../../Assets/Images/Gallery.png";
import AlienPhoto from "../../Assets/Images/alien.png";
import BraillePhoto from "../../Assets/Images/Braille.png"
import MisijaV from "../../Assets/Images/Misija.png";
import KlijnetiPhoto from "../../Assets/Images/klijenti.png";
import YojStickPhoto from "../../Assets/Images/yojstick.png";
import GamePhoto from "../../Assets/Images/IgreButton.png";
import ContactPhoto from "../../Assets/Images/contact.png";
import FbIcon from "../../Assets/Images/fbIcon.png";
import GitIcon from "../../Assets/Images/gitHub.svg";
import IgIcon from "../../Assets/Images/instagram.png";


export const Colors={
    White:"#ffff",
    Black:"#000000",
    TextColor:"#2483FF",
    HoverColor:"#0077FF",
    RTSGalleryColor:"#00FFCC",
    BrailleColor:"#F7941E",
    GalleryColor:"#FF641A",
    GamesColor:"#FFC300",
    OutlineInput:"#2483FF"

};


export const Images={
    GamePadImg:`${GamePady}`,
    HomePageButton:`${HomePage}`,
    GameLabIcon:`${GameLab}`,
    Onama:`${AboutOus}`,
    User:`${UserPhoto}`,
    GalleryButton:`${Gallery}`,
    GalleryP:`${GalleryPhoto}`,
    Alien:`${AlienPhoto}`,
    Braille:`${BraillePhoto}`,
    MisijaVizija:`${MisijaV}`,
    Klijneti:`${KlijnetiPhoto}`,
    Yojstick:`${YojStickPhoto}`,
    Game:`${GamePhoto}`,
    Contact:`${ContactPhoto}`,
    Fb:`${FbIcon}`,
    Ig:`${IgIcon}`,
    Git:`${GitIcon}`

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

    export const HeadingContainer=styled.div`
        display:flex;
        top:5%;
        justify-content:center;
        position:absolute;
        width:57%;
        height:10%;`;

    export const HeadinOfPage=styled.h1`
       font-weight:bold;
       font-size:60px;`;