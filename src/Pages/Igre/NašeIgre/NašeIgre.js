import React from 'react';

import { RTSpageContinaer as NašeigrePageContainer } from '../../Galerija/RTS/RTSstyle';

import SidePlayStationLogo from '../../../Components/SidePlayStationLogo/SidePlayStationLogo';
import Navigation from '../../../Components/Navigation/Navigation';

import { SideContainer } from '../../../Components/SideContainer/SideContainerStyle';

import { Images,Colors,HeadinOfPage } from '../../../Assets/Lib/GeneralStyles';

import { Photo } from '../../O nama/MisijaVizija/MVstyle';

import { ContentContainer,Content } from '../../Galerija/GalerijaPage/GalerijaPageStyle'


const NašeIgre = () => {
    return ( 
        <NašeigrePageContainer>
            <SideContainer Backcolor={Colors.RTSGalleryColor}>
                <Photo src={Images.Alien}/>
            </SideContainer>

            <Navigation/> 

            <ContentContainer>
           
                <HeadinOfPage>Naše igre</HeadinOfPage>
        
                <Content>
                Kao što smo već naveli, relativno kratko smo u postojanju stoga su naše igre trenutno malobrojne no to ne 
                znači da nisu kvalitetne i u njih uloženo puno truda. 
                Prva igrica koju smo napravili je Braille, 
                napravljena je po zahtjevu klijenta koji je želio igricu koja bi otvorila svijest o gluhonijemim osobama 
                te naučila više ljudi Braillovo pismo na zabavan način. Igra je u stilu Wild West-a i kauboja. 
                Igrač je kauboj koji mora pogoditi točkice na način da napiše jedno zadano slovo i Braillove abecede.
                Druga igrica je RTS koja je trenutno u nastajanju te je nastala iz dogovora članova GameLab-a. 
                Ova igrica ima drugačiju tematiku od prve te nema svrhu učenja već samu zabavu.
                Uz ovu igricu su vezani vanzemaljci, 
                koji bi došli na naš planet radi resursa te bi bila borba između njih i ljudi.

                </Content>
            </ContentContainer>


            <SidePlayStationLogo logo={Images.Game}/>
        </NašeigrePageContainer>
     );
}
 
export default NašeIgre;