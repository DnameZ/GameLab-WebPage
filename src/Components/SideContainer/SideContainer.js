import React from 'react';

import { Images,Colors } from '../../Assets/Lib/GeneralStyles';

import { SideContainer as SideContainerHomePage, SideContainerTitle } from './SideContainerStyle';

const SideContianer = () => {
    return (
        <SideContainerHomePage background={Images.GamePadImg} color={Colors.TextColor}>
          <SideContainerTitle>GameLab</SideContainerTitle>
        </SideContainerHomePage>
      );
}
 
export default SideContianer;