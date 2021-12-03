import React, {useContext,useState} from 'react';

import {UsuarioContext} from '../../contexts/user'

import {
    Container,
    Button,
    ButtonText
} from './styles';


const Settings = () => {
    
    const{signOut,user} = useContext(UsuarioContext);

    return (
        <Container>
            <ButtonText>{user.email}</ButtonText>
           
            <Button onPress={()=>{signOut()}}>
                <ButtonText>Sair do app</ButtonText>
            </Button>

        </Container>
    )
}

export default Settings;