import React, { Suspense } from 'react';
import { Canvas} from '@react-three/fiber'
import { OrbitControls, useGLTF } from "@react-three/drei";


import SidePlayStationLogo from '../../../Components/SidePlayStationLogo/SidePlayStationLogo';
import Navigation from '../../../Components/Navigation/Navigation';


import { RTSpageContinaer,
         VideoContainer,
         Videos,
        } from './RTSstyle';

import { SideContainer } from '../../../Components/SideContainer/SideContainerStyle';

import { Images,Colors,HeadingContainer,HeadinOfPage } from '../../../Assets/Lib/GeneralStyles';

import Engine from "../../../Assets/3Dmodels/Engine.glb";

const RTS = () => {

    const VideoLinks=["https://www.youtube.com/embed/L9HvD0ZGZXA","https://www.youtube.com/embed/ms8MJlFWkzc",
                      "https://www.youtube.com/embed/yA9lTEMmxoQ"];

    const Model=(props)=>
    {
        const {scene}=useGLTF(Engine);

        return <primitive object={scene}/>
    }

    return ( 
        <RTSpageContinaer>           

            <SideContainer Backcolor={Colors.RTSGalleryColor}>
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
                <HeadinOfPage>RTS</HeadinOfPage>
            </HeadingContainer>

            <VideoContainer>
                {VideoLinks.map((video,index)=>(
                    <Videos key={index} src={video}></Videos>
                ))}
            </VideoContainer>


            <SidePlayStationLogo logo={Images.GalleryButton}/>

        </RTSpageContinaer>
     );
}
 
export default RTS;