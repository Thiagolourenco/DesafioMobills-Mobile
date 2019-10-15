import React, {Component} from 'react';
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
  ButtonText,
  ButtonCadastro,
  Title,
} from './style';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
  };

  handleCreateUser = async () => {
    const {displayName, email, password} = this.state;
    const {navigation} = this.props;

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userInfo => {
        setTimeout(() => {
          userInfo.user.updateProfile({displayName: displayName.trim()});
          navigation.navigate('Login');
        }, 3000);
      });
  };
  render() {
    const {displayName, email, password} = this.state;
    return (
      <Container>
        <Title>CADASTRO</Title>
        <Form>
          <Input
            placeholder="Seu Nome"
            value={displayName}
            onChange={text => this.setState({displayName: text})}
            placeholderTextColor="#000"
          />
          <Input
            placeholder="Seu e-mail"
            value={email}
            onChange={text => this.setState({email: text})}
            placeholderTextColor="#000"
          />
          <Input
            placeholder="*******"
            placeholderTextColor="#000"
            value={password}
            onChange={text => this.setState({password: text})}
            secureTextEntry={true}
          />

          <ButtonCadastro onPress={() => this.handleCreateUser()}>
            <ButtonText>CADASTRAR</ButtonText>
          </ButtonCadastro>
        </Form>
      </Container>
    );
  }
}

export default SignUp;
