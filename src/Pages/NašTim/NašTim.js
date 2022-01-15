import React,{useState,useEffect} from 'react';

import { Images } from '../../Assets/Lib/GeneralStyles';

import SideContianer from '../../Components/SideContainer/SideContainer';
import SidePlayStationLogo from '../../Components/SidePlayStationLogo/SidePlayStationLogo';
import Navigation from "../../Components/Navigation/Navigation";

import { NašTimPageContainer,
         GroupContainer,
         DataContainer,
         HeadOfLab, 
         LabMemFront,
         LabMemBack,
         LabMemInner,
         UserPhoto,       
         } from './NašTimStyle';

import { HeadinOfPage,HeadingContainer } from '../../Assets/Lib/GeneralStyles';

const NašTim = () => {

    const [flipped,setFlipped]=useState([{imeČlana:"Marko Mrkonjić",flipping:false},
                                        {imeČlana:"Domagoj Krnjić",flipping:false},
                                        {imeČlana:"Domagoj Cvitković",flipping:false},
                                        {imeČlana:"Juša Katić",flipping:false},
                                        {imeČlana:"CroMartin",flipping:false},
                                        {imeČlana:"Tin",flipping:false},
                                        {imeČlana:"Marko Marac",flipping:false},
                                        {imeČlana:"Damjan",flipping:false},
                                        {imeČlana:"LegoCro",flipping:false},
                                        {imeČlana:"Symbiote",flipping:false}]);
                                        
    const FlipTheCard=(index)=>
    {
         //setFlipped(prevState => prevState.map((item,idx)=> index===idx ? !item: item));

         const newArr=[...flipped];

         newArr[index].flipping=!newArr[index].flipping;

         setFlipped(newArr);
    }

    

    return ( 
        <NašTimPageContainer>
            
            <SideContianer backgroundImage={Images.GameLabIcon}/>

            <Navigation/>

            <HeadingContainer>
                <HeadinOfPage>Naš tim</HeadinOfPage>
            </HeadingContainer>
            
            <GroupContainer>

                <HeadOfLab>
                    <UserPhoto src={Images.User}/>
                </HeadOfLab>

                <DataContainer>

                    {flipped.map((flip,index)=>(
                        <LabMemInner key={index} className={flip.flipping ?  "flipped":"" }> 

                            <LabMemFront onClick={()=>FlipTheCard(index)}>
                                <UserPhoto src={Images.User}/>
                            </LabMemFront>

                            <LabMemBack onClick={()=>FlipTheCard(index)}>
                                <p>{flip.imeČlana}</p>
                            </LabMemBack>

                    </LabMemInner>      
                    ))}     

                </DataContainer>
            
            </GroupContainer>

            <SidePlayStationLogo logo={Images.Onama}/>

        </NašTimPageContainer>
     );
}
 
export default NašTim;
