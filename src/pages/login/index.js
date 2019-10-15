import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
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

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleRegister() {
    navigation.navigate('SignUp');
  }

  function handleLogin() {
    setLoading(true);

    const user = firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() =>
        setTimeout(() => {
          navigation.navigate('Home'),
            setAuthenticated(true),
            setLoading(false);
        }, 3000),
      )
      .catch(error => alert(error));
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
      </Form>
    </Container>
  );
}

export default Login;
