import React, {useState} from 'react';
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
  Success,
  TextSuccess,
} from './style';

import DateInput from '../../components/DateInput';

function Register({navigation}) {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [valor, setValor] = useState('');
  const [loading, setLoading] = useState('');

  function handleAddDespesa() {
    setLoading(true);

    firebase
      .firestore()
      .collection('despesa')
      .add({
        name,
        descricao: desc,
        diaCompra: date,
        pago: false,
        valor,
      });

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home');
    }, 3000);
  }

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

        <DateInput date={date} onChange={setDate} />

        <ButtonAdicionar onPress={handleAddDespesa}>
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

/**
 * Adiciona as Despesas, que o usuário deseja cadastrar
 */

export default Register;
