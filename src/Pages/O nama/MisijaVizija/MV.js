import React from 'react';

import { RTSpageContinaer as MVPageContinaer } from '../../Galerija/RTS/RTSstyle';

import SidePlayStationLogo from '../../../Components/SidePlayStationLogo/SidePlayStationLogo';
import Navigation from '../../../Components/Navigation/Navigation';

import { SideContainer } from '../../../Components/SideContainer/SideContainerStyle';

import { Images,Colors,HeadinOfPage } from '../../../Assets/Lib/GeneralStyles';

import { Photo } from './MVstyle';

import { ContentContainer,Content } from '../../Galerija/GalerijaPage/GalerijaPageStyle';

const MV = () => {
    return ( 
        <MVPageContinaer>
            <SideContainer Backcolor={Colors.RTSGalleryColor}>
                <Photo src={Images.MisijaVizija}/>
            </SideContainer>

            <Navigation/> 

            <ContentContainer>
           
                <HeadinOfPage>Misija i Vizija</HeadinOfPage>
        
                <Content>
                    Misija nam je da se što više ljudi koje zanimaju igrice pridruže našem timu te nam pomognu stvarati 
                    nove zanimljive igrice za koje možemo reći da su naše. Naša želja za napredovanjem i učenjem nečeg novog 
                    te prelaženjem preko novih prepreka sa kojih se nalazimo svaki dan u ovome području je omogućilo 
                    da ovaj GameLab nastane i počne funkcionirati kao hobi uz fakultet. 
                    Vizija nam je da se sa vremenom razvijemo u nešto puno veće i da dobijemo veći značaj na fakultetu, 
                    ne nužno samo FOI već i drugi fakulteti koji bi se željeli pridružiti te da stvaramo nova poznanstva 
                    i prilike kako za sadašnje članove tima tako i za buduće koji će nam se pridružiti. 
                </Content>
            </ContentContainer>


            <SidePlayStationLogo logo={Images.Onama}/>
        </MVPageContinaer>
     );
}
 
export default MV;