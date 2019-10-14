import React, {useState} from 'react';
import {Text, ActivityIndicator, View, DatePickerAndroid} from 'react-native';
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
  TextIn,
} from './style';

import DateInput from '../../components/DateInput';

function ExampleDate({navigation}) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [valor, setValor] = useState('');
  const [diaCompra, setDiaCompra] = useState(new Date());
  const [dataCompra, setDataCompra] = useState('Data Da Compra');
  const [loading, setLoading] = useState(false);
  const [dataNova, setDataNova] = useState('');

  const ref = firebase.firestore().collection('despesa');

  async function showDatePicker(options) {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        mode: 'spinner',
        date: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        let date = new Date(year, month, day);
        let newDate = {};

        newDate['date'] = date;
        // Selected year, month (0-11), day
        setDataCompra(newDate);
      }
    } catch ({code, message}) {
      alert(message);
    }
  }

  async function handleAddDespesa() {}

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Content>
        <TituloAdd>ADICIONAR DESPESA</TituloAdd>
        <Input
          placeholder="Nome da Despesa"
          placeholderTextColor="#000"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder="Descrição"
          placeholderTextColor="#000"
          value={desc}
          onChangeText={text => setDesc(text)}
        />
        <Input
          placeholder="Valor"
          placeholderTextColor="#000"
          value={valor}
          keyboardType={'numeric'}
          onChangeText={text => setValor(text)}
        />

        <InputDate onPress={showDatePicker}>
          <InputDateText>{dataCompra}</InputDateText>
        </InputDate>

        <ButtonAdicionar onPress={handleAddDespesa}>
          <ButtonText>ADICIONAR</ButtonText>
        </ButtonAdicionar>
      </Content>
    </Container>
  );
}

export default ExampleDate;
