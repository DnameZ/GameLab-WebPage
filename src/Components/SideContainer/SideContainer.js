import React from 'react';

import { SideContainer as SideContainerHomePage, SideContainerTitle } from './SideContainerStyle';

const SideContianer = ({backgroundImage,backColor}) => {
    return (
        <SideContainerHomePage background={backgroundImage} color={backColor}>

        </SideContainerHomePage>
      );
}
 
export default SideContianer;