import React from 'react';

import { useNavigate } from 'react-router';
import { Images } from '../../Assets/Lib/GeneralStyles';

import { MainContainer,LogoContainer,Logo } from './PlayStationLogoStyle';
import { OnlyButton } from '../../Assets/Lib/GeneralStyles';

const PlayStationLogo = () => {

    const navigate=useNavigate();

    return ( 
        <MainContainer>
            <LogoContainer>
                <Logo src={Images.HomePageButton}/>
                
                <OnlyButton onClick={()=>navigate("/Kontakt")}>Kontakt</OnlyButton>
            </LogoContainer>
        </MainContainer>
     );
}
 
export default PlayStationLogo;