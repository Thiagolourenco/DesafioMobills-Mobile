import React, {Component} from 'react';
import {Text, ActivityIndicator, DatePickerAndroid} from 'react-native';
import firebase from 'react-native-firebase';

import {
  Container,
  Content,
  TituloAdd,
  Input,
  InputDate,
  InputDateText,
  ButtonAdicionar,
  ButtonText,
} from './style';

// import DateInput from '../../components/DateInput';

class Register extends Component {
  state = {
    valor: '',
    desc: '',
    diaCompra: 'Dia Da Compra',
    date: new Date(),
    name: '',
    loading: false,
  };

  showDatePicker = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        mode: 'spinner',
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        let date = new Date(year, month, day);
        let newDate = {};

        newDate['date'] = date;
        newDate['diaCompra'] = date.toLocaleDateString('en-US');
        this.setState(newDate);
      }
    } catch ({code, message}) {
      alert(code, message);
    }
  };

  handleAddDespesa = () => {
    const {name, desc, diaCompra, valor} = this.state;
    const {navigation} = this.props;
    this.setState({
      loading: true,
    });

    firebase
      .firestore()
      .collection('despesa')
      .add({
        name,
        descricao: desc,
        diaCompra,
        pago: false,
        valor,
      });

    setTimeout(() => {
      this.setState({
        loading: false,
      });
      navigation.navigate('Home');
    }, 3000);
  };

  render() {
    const {name, desc, valor, diaCompra, date, loading} = this.state;
    return (
      <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Content>
          <TituloAdd>ADICIONAR DESPESA</TituloAdd>
          <Input
            placeholder="Nome da Despesa"
            placeholderTextColor="#000"
            value={name}
            onChangeText={text => this.setState({name: text})}
          />
          <Input
            placeholder="Descrição"
            placeholderTextColor="#000"
            value={desc}
            onChangeText={text => this.setState({desc: text})}
          />
          <Input
            placeholder="Valor"
            placeholderTextColor="#000"
            value={valor}
            keyboardType={'numeric'}
            onChangeText={text => this.setState({valor: text})}
          />

          <InputDate onPress={() => this.showDatePicker({date})}>
            <InputDateText>{diaCompra}</InputDateText>
          </InputDate>

          <ButtonAdicionar onPress={() => this.handleAddDespesa()}>
            {loading ? (
              <ActivityIndicator size={16} color="#fff" />
            ) : (
              <ButtonText>ADICIONAR</ButtonText>
            )}
          </ButtonAdicionar>
        </Content>
      </Container>
    );
  }
}

export default Register;
