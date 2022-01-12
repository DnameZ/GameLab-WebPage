
import SideContianer from "../../Components/SideContainer/SideContainer";
import PlayStationLogo from "../../Components/PlayStationLogo/PlayStationLogo";
import Navigation from "../../Components/Navigation/Navigation";

import { HomePageContainer } from "./HomePageStyle";


const HomePage = () => {
    return ( 
        <HomePageContainer>
            
            <SideContianer/>

            <PlayStationLogo/>

            <Navigation/>

        </HomePageContainer>
     );
}
 
export default HomePage;