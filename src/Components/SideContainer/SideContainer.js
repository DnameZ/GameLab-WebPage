import React from 'react';

import { Images } from '../../Assets/Lib/GeneralStyles';

import { SideContainer as SideContainerHomePage, SideContainerTitle } from './SideContainerStyle';

const SideContianer = () => {
    return (
        <SideContainerHomePage background={Images.GamePadImg}>
          <SideContainerTitle>GameLab</SideContainerTitle>
        </SideContainerHomePage>
      );
}
 
export default SideContianer;