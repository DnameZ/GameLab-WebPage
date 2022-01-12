import React from 'react';

import { Images } from '../../Assets/Lib/GeneralStyles';

import { MainContainer,LogoContainer,Logo } from './PlayStationLogoStyle';
import { OnlyButton } from '../../Assets/Lib/GeneralStyles';

const PlayStationLogo = () => {
    return ( 
        <MainContainer>
            <LogoContainer>
                <Logo src={Images.HomePageButton}/>
                
                <OnlyButton>Kontakt</OnlyButton>
            </LogoContainer>
        </MainContainer>
     );
}
 
export default PlayStationLogo;