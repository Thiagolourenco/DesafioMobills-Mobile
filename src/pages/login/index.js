import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
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
  MessageError,
} from './style';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState(false);
  /**
   * Navega usuários para a tela de SignUp
   */
  function handleRegister() {
    navigation.navigate('SignUp');
  }

  /**
   * Realiza o login do usuário
   */

  function handleLogin() {
    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() =>
        setTimeout(() => {
          navigation.navigate('Home'),
            setAuthenticated(true),
            setLoading(false);
        }, 3000),
      )
      .catch(error => {
        if (error.code == 'auth/wrong-password') {
          setTimeout(() => {
            setMessageError(true);
            setLoading(false);
          }, 3000);
        }

        if (error.code == 'auth/user-not-found') {
          setTimeout(() => {
            setMessageError(true);
            setLoading(false);
          }, 3000);
        }
      });
  }

  return (
    <Container>
      <Title>LOGIN</Title>
      <Form>
        <FormInput>
          <Input
            placeholder="Seu e-mail"
            value={email}
            onChangeText={text => setEmail(text)}
            placeholderTextColor="#000"
          />
        </FormInput>
        <FormInput>
          <Input
            placeholder="*******"
            placeholderTextColor="#000"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </FormInput>
        <ButtonEntrar onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator size={16} color="#fff" />
          ) : (
            <ButtonText>ENTRAR</ButtonText>
          )}
        </ButtonEntrar>
        <ButtonCadastro onPress={handleRegister}>
          <ButtonText>CADASTRAR</ButtonText>
        </ButtonCadastro>

        {messageError ? (
          <MessageError>Deu error, verifique seu email e senha</MessageError>
        ) : null}
      </Form>
    </Container>
  );
}

export default Login;
