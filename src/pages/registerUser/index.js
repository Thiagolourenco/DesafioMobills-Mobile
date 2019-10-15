import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import firebase from 'react-native-firebase';

import {
  Container,
  Form,
  FormInput,
  Input,
  ButtonEntrar,
  ButtonText,
  ButtonCadastro,
  Title,
} from './style';

function RegisterUser({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateUser() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(e => navigation.navigate('Home'))
      .catch(e => alert(e));
  }

  return (
    <Container behavior="padding">
      <Title>CADASTRO</Title>
      <Form>
        <FormInput>
          <Input
            placeholder="Seu e-mail"
            value={email}
            onChange={text => setEmail(text)}
            placeholderTextColor="#000"
          />
        </FormInput>
        <FormInput>
          <Input
            placeholder="*******"
            placeholderTextColor="#000"
            value={password}
            onChange={text => setPassword(text)}
            secureTextEntry
          />
        </FormInput>

        <ButtonCadastro onPress={handleCreateUser}>
          <ButtonText>CADASTRAR</ButtonText>
        </ButtonCadastro>
      </Form>
    </Container>
  );
}

export default RegisterUser;
