import React from 'react';

import { RTSpageContinaer as IgrePageContainer } from '../../Galerija/RTS/RTSstyle';

import SidePlayStationLogo from '../../../Components/SidePlayStationLogo/SidePlayStationLogo';
import Navigation from '../../../Components/Navigation/Navigation';

import { SideContainer } from '../../../Components/SideContainer/SideContainerStyle';

import { Images,Colors,HeadinOfPage } from '../../../Assets/Lib/GeneralStyles';

import { Photo } from './igriceStyle';

import { ContentContainer,Content } from '../../Galerija/GalerijaPage/GalerijaPageStyle'


const Igre = () => {
    return ( 
        <IgrePageContainer>
            <SideContainer Backcolor={Colors.GamesColor}>
                <Photo  src={Images.Yojstick}/>
            </SideContainer>

            <Navigation/> 

            <ContentContainer>
           
                <HeadinOfPage>Igre</HeadinOfPage>
        
                <Content>
                Videoigra je interaktivni elektronički računalni program namijenjen za zabavu. 
                Najčešće se odvija na računalu, mobitelu ili igraćim konzolama s video zaslonom, kao što su računalni monitor 
                ili TV. U novije vrijeme je jedan od najpopularnijih oblika zabave u svijetu. 
                Videoigre se iz dana u dan razvijaju i poboljšavaju u tehničkim karakteristikama. 
                Postaju sve važniji gospodarski čimbenik mnogih zemalja. 
                Osnovni zahtjevi videoigara su izlazni grafički uređaji (najčešće monitor), 
                te ulazni grafički uređaji. Mnoge novije igre zahtijevaju grafički procesor i mrežnu opremu.
                <br/>
                <br/>
                Najpoznatiji žanrovi: arkade, open-world, horror, preživanje, simulacije, sportske, FPS, RPG.
                </Content>
            </ContentContainer>


            <SidePlayStationLogo logo={Images.Game}/>
        </IgrePageContainer>
     );
}
 
export default Igre;