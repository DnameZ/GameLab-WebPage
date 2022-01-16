import React from 'react';

import { RTSpageContinaer as KlijentiPageContainer } from '../../Galerija/RTS/RTSstyle';

import SidePlayStationLogo from '../../../Components/SidePlayStationLogo/SidePlayStationLogo';
import Navigation from '../../../Components/Navigation/Navigation';

import { SideContainer } from '../../../Components/SideContainer/SideContainerStyle';

import { Images,Colors,HeadinOfPage } from '../../../Assets/Lib/GeneralStyles';

import { Photo } from '../MisijaVizija/MVstyle';

import { ContentContainer,Content } from '../../Galerija/GalerijaPage/GalerijaPageStyle'


const Klijneti = () => {
    return ( 
        <KlijentiPageContainer>
            <SideContainer Backcolor={Colors.RTSGalleryColor}>
                <Photo src={Images.Klijneti}/>
            </SideContainer>

            <Navigation/> 

            <ContentContainer>
           
                <HeadinOfPage>Naši klijenti</HeadinOfPage>
        
                <Content>
                Kako smo već naveli, mi smo mlada grana na fakultetu FOI. U funkciji smo tek godinu dana te smo jedva poznati. 
                Naravno da bi smo voljeli da više ljudi zna za nas, no to će doći sa vremenom. 
                Naši klijenti su prvenstveno naravno studenti sa faksa. Oni su i članovi ovog GameLab-a. 
                No nisu jedino sa našeg fakulteta Foi, također imamo i studente sa drugih fakulteta diljem hrvatske koje zanima ovo područje i nemaju ovu mogućnost na svome fakultetu. 
                Druga vrsta klijenata su ona za koje se rade službene igrice naše radinosti. 
                To su raznovrsni klijenti koji su zatražili da se naprave specifične igrice jer su vidjeli 
                naš potencijal te su željni vidjeti kolike su naše početne sposobnosti u izradi igrica. 
                Prvi primjer ovakvog zahtjeva od klijenta je naša igrica Braille. 
                Ona je napravljena na zahtjev klijenta koji je želio igricu koja bi otvorila svijest o gluhonijemim osobama te naučila više ljudi Braillovo pismo na zabavan način.

                </Content>
            </ContentContainer>


            <SidePlayStationLogo logo={Images.Onama}/>
        </KlijentiPageContainer>
     );
}
 
export default Klijneti;