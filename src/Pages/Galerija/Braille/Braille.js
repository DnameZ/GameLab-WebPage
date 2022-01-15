import React, { Suspense } from 'react';
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import SidePlayStationLogo from '../../../Components/SidePlayStationLogo/SidePlayStationLogo';
import Navigation from '../../../Components/Navigation/Navigation';



import { BraillepageContinaer } from './BrailleStyle';

import { VideoContainer,Videos } from '../RTS/RTSstyle';



import { SideContainer } from '../../../Components/SideContainer/SideContainerStyle';

import { Images,Colors,HeadingContainer,HeadinOfPage } from '../../../Assets/Lib/GeneralStyles';

import Turret from "../../../Assets/3Dmodels/Turret.glb";

const Braille = () => {

    const VideoLinks=["https://www.youtube.com/embed/uD7NYWtZfvs","https://www.youtube.com/embed/4G_GZAJMSJs"];

    const Model=(props)=>
    {
        const {scene}=useGLTF(Turret);

        return <primitive object={scene}/>
    }

    return ( 
        <BraillepageContinaer>
            <SideContainer Backcolor={Colors.BrailleColor}>
                <Canvas pixelRatio={[1, 3]} camera={{ position: [-10, 15, 15], fov: 500 }}>
                    <ambientLight intensity={.8} />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                    <OrbitControls />
                </Canvas>
            </SideContainer>

            <Navigation/>

            <HeadingContainer>
                <HeadinOfPage>Braille</HeadinOfPage>
            </HeadingContainer>

            <VideoContainer>
                {VideoLinks.map((video,index)=>(
                    <Videos key={index} src={video}></Videos>
                ))}
            </VideoContainer>


            <SidePlayStationLogo logo={Images.GalleryButton}/>
        </BraillepageContinaer>
     );
}
 
export default Braille;