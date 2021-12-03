import React,{useContext,useState,useEffect} from 'react';
import {UsuarioContext} from '../../contexts/user'
import {
    Container,
    Button,
    ButtonText,
    Message,
    TextInput,
    ScrollView
} from './styles';

import firebaseApp from '../../services/firebase';

import {
    getFirestore,
    addDoc,
    collection,
    onSnapshot,
    query,
    where,
    orderBy
} from 'firebase/firestore';

const Chat = () => {

    const db = getFirestore(firebaseApp);
    const [messages,setMessages] = useState([]);
    const [mensagem,setMensagem] = useState('');
    const [agenda,setAgenda] = useState(true);
    const {user, signOut} = useContext(UsuarioContext)

    useEffect(()=>{
        const q = query(collection(db, "mensagens"), orderBy("dataInicial"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let mensagens = [];
            querySnapshot.forEach(async(doc)=>{
                const chat = {
                    "usuario" : doc.data().email,
                    "mensagem" : doc.data().mensagem,
                    "dataInicial" : doc.data().dataInicial
                }
                mensagens.push(chat);
            })
            setMessages(mensagens);
        });
        return () => unsubscribe()
    },[agenda])
    
 
    async function handleMessage(){
        try{
            await addDoc(collection(db,'mensagens'),{
               uid: user.uid,
               mensagem: mensagem,
               email: user.email,
               dataInicial: new Date()
            });
            setMensagem(""); 
        }catch(err){
            console.log('err',err)
        }
    }

    return (
        <Container>
            <ScrollView
                    ref={ref => {this.scrollView = ref}}
                    onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
                {messages.map((item,index)=>(
                    <Message key={index} chatFloat={item.usuario === user.email ? true : false}>{item.usuario} : {item.mensagem}</Message>
                ))}
            </ScrollView>

            <TextInput placeholder="Mensagem" defaultValue={mensagem}  onChangeText={(mensagem) => setMensagem(mensagem)} />

            <Button onPress={handleMessage}>
                <ButtonText>Enviar Mensagem</ButtonText>
            </Button>
        </Container>
    )
}

export default Chat;