import React from 'react';


import SidePlayStationLogo from '../../../Components/SidePlayStationLogo/SidePlayStationLogo';
import Navigation from '../../../Components/Navigation/Navigation';

import { SideContainer } from '../../../Components/SideContainer/SideContainerStyle';

import { Images,Colors,HeadingContainer,HeadinOfPage } from '../../../Assets/Lib/GeneralStyles';


import { RTSpageContinaer as GalleryPageContainer } from "../RTS/RTSstyle";

import { ContentContainer,Photo,Content,textContainer } from './GalerijaPageStyle';


const Gallery = () => {
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

                <Photo src={Images.Alien}/>
                <Photo src={Images.Braille}/>

                <textContainer>
                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare varius sem, ullamcorper viverra purus. 
                        Morbi molestie, enim et laoreet condimentum, purus justo feugiat turpis, lobortis finibus orci neque id augue. 
                        Sed interdum turpis sed ullamcorper feugiat. 
                        Duis blandit a odio a viverra. Praesent et auctor mauris. Ut quis augue felis. Quisque
                    </Content>
                </textContainer>
                
            </ContentContainer>

            <SidePlayStationLogo logo={Images.GalleryButton}/>
        </GalleryPageContainer>
     );
}
 
export default Gallery;