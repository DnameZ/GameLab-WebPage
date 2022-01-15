import React from 'react';

import { useNavigate } from "react-router-dom";

import { NavigationContainer,
         HomePageButton,
         Select,
         Option } from './NavigationStyle';

const Navigation = () => {

    const navigate = useNavigate();

    const handleChange=(e)=> {
        navigate(`/${e.target.value}`
        );
      }
    return ( 
        <NavigationContainer>

            <HomePageButton onClick={()=>navigate("/Homepage")}>Homepage</HomePageButton>

            <Select onChange={(event=>handleChange(event))} >
                <Option>O nama</Option>
                <Option value="Onama">Naš tim</Option>
                <Option value="Onama/MsijaVizija">Misija i Vizija</Option>
                <Option value="Onama/Klijenti">Naši klijenti</Option>
            </Select>

            <Select name='Igre' id='igrice'  onChange={(event=>handleChange(event))}>
                <Option>Igrice</Option>
                <Option value="Igre">Igre</Option>
                <Option value="Igrice">Naše Igre</Option>
                <Option value="Igre/Projekti">Projekti</Option>
            </Select>

            <Select name='Galerija' id='galerija'  onChange={(event=>handleChange(event))}>
                <Option>Naši radovi</Option>
                <Option value="Galerija">Galerija</Option>
                <Option value="Galerija/RTS">RTS</Option>
                <Option value="Galerija/Braille" >Braille</Option>
            </Select>

        </NavigationContainer>
     );
}
 
export default Navigation;