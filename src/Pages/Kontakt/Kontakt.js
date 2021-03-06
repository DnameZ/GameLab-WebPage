import React from 'react';

import { useNavigate } from 'react-router';

import { RTSpageContinaer as KontaktPageContainer } from '../Galerija/RTS/RTSstyle';
import { SideContainer } from '../../Components/SideContainer/SideContainerStyle';
import { Photo } from '../O nama/MisijaVizija/MVstyle';
import { Images,Colors } from '../../Assets/Lib/GeneralStyles';
import { ContactButton, ContactContainer, Form, Input, TextArea, WebContainer,WebPhoto  } from './KontaktStyle';


const Kontakt = () => {

    const navigate=useNavigate();

    return ( 
        <KontaktPageContainer>
            <SideContainer Backcolor={Colors.Black}>
                 <Photo src={Images.Contact}/>
            </SideContainer>          

            <ContactContainer>
                <ContactButton onClick={()=>navigate("/")}>HomePage</ContactButton>
                    <Form>
                        <Input placeholder='Ime'/>
                        <Input placeholder='Prezime'/>
                        <Input placeholder='Company'/>
                        <Input placeholder='Email'/>

                        <TextArea placeholder='Your message here'/>
                    </Form>
                <ContactButton>Pošalji</ContactButton>
            </ContactContainer>

            <WebContainer>
                <WebPhoto src={Images.Fb}/>
                <WebPhoto src={Images.Ig}/>
                <WebPhoto src={Images.Git}/>
            </WebContainer>
        </KontaktPageContainer>
     );
}
 
export default Kontakt;