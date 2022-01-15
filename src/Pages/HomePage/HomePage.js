
import SideContianer from "../../Components/SideContainer/SideContainer";
import PlayStationLogo from "../../Components/PlayStationLogo/PlayStationLogo";
import Navigation from "../../Components/Navigation/Navigation";

import { Images } from "../../Assets/Lib/GeneralStyles";

import { HomePageContainer } from "./HomePageStyle";
import { SideContainerTitle } from "../../Components/SideContainer/SideContainerStyle";


const HomePage = () => {

    return ( 
        <HomePageContainer>
            
            <SideContianer backgroundImage={Images.GamePadImg}>
                <SideContainerTitle>GameLab</SideContainerTitle>
            </SideContianer>

            <PlayStationLogo/>

            <Navigation/>

        </HomePageContainer>
     );
}
 
export default HomePage;