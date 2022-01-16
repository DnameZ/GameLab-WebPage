import React from 'react';

import { useNavigate } from 'react-router';

import SidePlayStationLogo from '../../../Components/SidePlayStationLogo/SidePlayStationLogo';
import Navigation from '../../../Components/Navigation/Navigation';

import { SideContainer } from '../../../Components/SideContainer/SideContainerStyle';

import { Images,Colors,HeadingContainer,HeadinOfPage } from '../../../Assets/Lib/GeneralStyles';


import { RTSpageContinaer as GalleryPageContainer } from "../RTS/RTSstyle";

import { ContentContainer,Photo,Content } from './GalerijaPageStyle';


const Gallery = () => {

    const navigate=useNavigate();

    const x = 100;
    const y = 100;
    const styles = { 
        transform: `translate(${x}px, ${y}px)` 
    };

    return ( 
        <GalleryPageContainer>
            <SideContainer Backcolor={Colors.GalleryColor}>
                <Photo src={Images.GalleryP}/>
            </SideContainer>

            <Navigation/> 
            
            <HeadingContainer>
                <HeadinOfPage>Galerija</HeadinOfPage>
            </HeadingContainer>

            <ContentContainer>

                <Photo onClick={()=>navigate("/Galerija/RTS")} src={Images.Alien}/>
                <Photo onClick={()=>navigate("/Galerija/Braille")} src={Images.Braille}/>

                <textContainer>
                    <Content>
                         Trenutno se može birati između dviju galerija sa naše dvije igrice koje za sada imamo.
                         A to su RTS igra koja je još u razvijanju, i nadamo se da će biti u igrivom stanju do kraje ove godine.
                         A druga je projekt sa kojim želimo osigurati učenje Braillovog pisma lakšim tako što će student učiti kroz igru. 
                    </Content>
                </textContainer>
                
            </ContentContainer>

            <SidePlayStationLogo logo={Images.GalleryButton}/>
        </GalleryPageContainer>
     );
}
 
export default Gallery;