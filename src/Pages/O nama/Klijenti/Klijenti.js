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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse ornare varius sem, ullamcorper viverra purus. 
                    Morbi molestie, enim et laoreet condimentum, purus justo feugiat turpis, 
                    lobortis finibus orci neque id augue. Sed interdum turpis sed ullamcorper feugiat. 
                    Duis blandit a odio a viverra. Praesent et auctor mauris. Ut quis augue felis. 
                    Quisque a eros hendrerit, interdum lacus vel, finibus ante. Vivamus consectetur lacus in nibh tristique semper. 
                    Nunc interdum, nibh ac varius tempor, urna eros blandit enim, ut congue lectus sapien sit amet sapien. 
                    Nam sit amet sem efficitur, dignissim risus ac, tempor tellus. Donec posuere sed diam ut eleifend. 
                    In eget auctor neque, eu fringilla nunc. Vivamus sit amet nulla tincidunt, fermentum dui non, dictum dolor. 
                    Donec id quam suscipit, tincidunt purus a, porta velit. Aliquam vitae augue mi. 
                    Mauris sed metus maximus, auctor erat nec, interdum mi.
                </Content>
            </ContentContainer>


            <SidePlayStationLogo logo={Images.Onama}/>
        </KlijentiPageContainer>
     );
}
 
export default Klijneti;