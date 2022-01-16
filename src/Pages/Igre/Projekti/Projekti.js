import React from 'react';

import { RTSpageContinaer as ProjektiPageContainer } from '../../Galerija/RTS/RTSstyle';

import SidePlayStationLogo from '../../../Components/SidePlayStationLogo/SidePlayStationLogo';
import Navigation from '../../../Components/Navigation/Navigation';

import { SideContainer } from '../../../Components/SideContainer/SideContainerStyle';

import { Images,Colors,HeadinOfPage } from '../../../Assets/Lib/GeneralStyles';

import { Photo } from '../../O nama/MisijaVizija/MVstyle';

import { ContentContainer,Content } from '../../Galerija/GalerijaPage/GalerijaPageStyle'


const Projekti = () => {
    return ( 
        <ProjektiPageContainer>
            <SideContainer Backcolor={Colors.BrailleColor}>
                <Photo src={Images.Braille}/>
            </SideContainer>

            <Navigation/> 

            <ContentContainer>
           
                <HeadinOfPage>Projekti</HeadinOfPage>
        
                <Content>
                Prvi projekt koji nam je u cilju završiti je igrica RTS. 
                Ona je na pola puta do finalnog izgleda ukoliko naravno nam naravno ne padne nova ideja za nadogradnju ove igrice.
                 No, naravno ukoliko se ukažu pravi klijenti koji su željni da im napravimo igrice, to će nam biti budući projekti. 
                Također se radujemo budućim projektima koje ćemo imati u budućnosti, 
                no trenutno stižemo onoliko koliko uspijemo uz fakultete i osobnog života no svakako
                ćemo imati projekata u bližoj budućnosti.

                </Content>
            </ContentContainer>


            <SidePlayStationLogo logo={Images.Game}/>
        </ProjektiPageContainer>
     );
}
 
export default Projekti;