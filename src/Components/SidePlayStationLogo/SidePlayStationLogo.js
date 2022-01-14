import React from 'react';

import { SidePlayLogoContainer,SideLogo } from './SidePlayStationLogoStyle';

const SidePlayStationLogo = ({logo}) => {
    return ( 
        <SidePlayLogoContainer>
            <SideLogo src={logo}/>
        </SidePlayLogoContainer>
     );
}
 
export default SidePlayStationLogo;