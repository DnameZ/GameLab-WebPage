import React from 'react';

import { NavigationContainer,
         HomePageButton,
         Select,
         Option } from './NavigationStyle';

const Navigation = () => {
    return ( 
        <NavigationContainer>

            <HomePageButton>Homepage</HomePageButton>

            <Select name='O nama' id='o nama'>
                <Option value="Naš tim">Naš tim</Option>
                <Option value="Misija i Vizija">Misija i Vizija</Option>
                <Option value="Naši klijenti">Naši klijenti</Option>
            </Select>

            <Select name='Igre' id='igrice'>
                <Option value="Igre">Igre</Option>
                <Option value="Naše Igre">Naše Igre</Option>
                <Option value="Projekti">Projekti</Option>
            </Select>

            <Select name='Galerija' id='galerija'>
                <Option value="Galerija">Galerija</Option>
                <Option value="RTS">RTS</Option>
                <Option value="Braille">Braille</Option>
            </Select>

        </NavigationContainer>
     );
}
 
export default Navigation;