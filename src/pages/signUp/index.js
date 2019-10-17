import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import firebase from 'react-native-firebase';

import {
  Container,
  Form,
  Input,
  ButtonText,
  ButtonCadastro,
  Title,
  Success
} from './style';

function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);

  /**
   * Reliza o registro do usuário, para que o usuário possa realizar o login
   */

  function handleRegisterUser() {
    setLoading(true);
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(users => {
          users.user.updateProfile({displayName: displayName.trim()});
          setTimeout(() => {
            setLoading(false);
            navigation.navigate('Login');
          }, 3000);
        })
        .catch(error => alert(error));
    } catch (e) {
      alert(e);
    }
  }

  return (
    <Container>
      <Title>CADASTRO</Title>
      <Form>
        <Input
          placeholder="Seu Nome"
          value={displayName}
          onChangeText={text => setDisplayName(text)}
          placeholderTextColor="#000"
        />
        <Input
          placeholder="Seu e-mail"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor="#000"
        />
        <Input
          placeholder="*******"
          placeholderTextColor="#000"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <ButtonCadastro onPress={handleRegisterUser}>
          {loading ? (
            <ActivityIndicator size={16} color="#fff" />
          ) : (
            <ButtonText>CADASTRAR</ButtonText>
          )}
        </ButtonCadastro>
        {
          loading ? <Success>Cadastro Realizado com sucesso</Success> : null
        }
      </Form>
    </Container>
  );
}

export default SignUp;
