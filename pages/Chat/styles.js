import styled from 'styled-components/native';

export const ScrollView  = styled.ScrollView`
    background-color:#333;
    flex:6;
    padding:10px;
    color: #fff;
    width: 100%;
    
`;

export const TextInput  = styled.TextInput`
    width: 100%;
    height: 10px;
    font-size: 18px;
    flex: 1;
    color: #000000;
    background: #fff;
    border-radius: 5px;
    padding:6px;
    margin:10px 5px;
`;


export   const Container = styled.View`
    background-color:#333;
    flex:1;
    align-items:center;
    justify-content:center;
    padding:10px;
`;

export const Button = styled.TouchableOpacity`
    height:60px;
    background-color: #AE1B73;
    border-radius: 5px;
    justify-content:center;
    align-items:center;
    width:100%;

`;

export const ButtonText = styled.Text`
    color:#fff;
    font-size:16px;
    font-weight:bold;
`;

export const Message = styled.Text`
    color:#fff;
    font-size:18px;
    padding:6px;
    textAlign: ${props => props.chatFloat == true ? "right":"left"};
`;
