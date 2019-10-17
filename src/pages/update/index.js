import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, Picker} from 'react-native';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateInput from '../../components/DateInput';
import {format} from 'date-fns';

import {
  Container,
  Title,
  TextIn,
  Input,
  GpButton,
  ButtonUpdate,
  ButtonRemove,
  TextButton,
  ButtonBack,
  Header,
  InputOp,
} from './style';

function Updates({navigation}) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [valor, setValor] = useState('');
  const [diaCompra, setDiaCompra] = useState(new Date());
  const [pago, setPago] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingUp, setLoadingUp] = useState(false);

  /**
   * ID da despesa, para realizar a atualizar ou remover
   */
  const id = navigation.getParam('id');

  /**
   * Carrega os dados do cliente, através do id
   */

  useEffect(() => {
    const ref = firebase
      .firestore()
      .collection('despesa')
      .doc(id);
    ref.get().then(doc => {
      setName(doc.data().name);
      setDesc(doc.data().descricao);
      setValor(doc.data().valor);
      setDiaCompra(format(doc.data().diaCompra, "dd 'de' MMMM 'de' yyyy"));
      setPago(doc.data().pago);
    });
  }, []);

  /**
   * Volta Para a tela de HOME
   */

  function handleGoBack() {
    navigation.navigate('Home');
  }

  /**
   * Carrega os dados do cliente, através do id
   */
  async function handleRemoveDespesa(id) {
    setLoading(true);

    await firebase
      .firestore()
      .collection('despesa')
      .doc(id)
      .delete();

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home');
    }, 3000);
  }

  /*
   * Atualiza os Dados do cliente
   */
  async function handleUpdateDespesa(id) {
    setLoadingUp(true);

    await firebase
      .firestore()
      .collection('despesa')
      .doc(id)
      .update({
        name,
        descricao: desc,
        valor,
        diaCompra,
        pago,
      });

    setTimeout(() => {
      setLoadingUp(false);
      navigation.navigate('Home');
    }, 3000);
  }

  return (
    <Container>
      <Header>
        <ButtonBack onPress={handleGoBack}>
          <Icon name="arrow-back" size={25} color="#fff" />
        </ButtonBack>
        <Title>Info das Despesas</Title>
      </Header>
      <View>
        <TextIn>Nome da Despesa</TextIn>
        <Input value={name} onChangeText={text => setName(text)} />
      </View>

      <View>
        <TextIn>Descrição</TextIn>
        <Input value={desc} onChangeText={text => setDesc(text)} />
      </View>

      <View>
        <TextIn>Valor</TextIn>
        <Input
          keyboardType={'numeric'}
          value={valor}
          onChangeText={text => setValor(text)}
        />
      </View>
      <View>
        <TextIn>Data da Compra</TextIn>
        <DateInput date={diaCompra} onChange={setDiaCompra} />
      </View>
      <View>
        <TextIn>Pago</TextIn>
        <InputOp
          selectedValue={pago}
          onValueChange={(itemValue, itemIndex) => setPago(itemValue)}>
          <Picker.Item label="Escolha opção" value="" />
          <Picker.Item label="SIM" value={true} />
          <Picker.Item label="NÃO" value={false} />
        </InputOp>
      </View>
      <GpButton>
        <ButtonUpdate onPress={() => handleUpdateDespesa(id)}>
          {loadingUp ? (
            <ActivityIndicator size={16} color="#fff" />
          ) : (
            <TextButton>ATUALIZAR</TextButton>
          )}
        </ButtonUpdate>
        <ButtonRemove onPress={() => handleRemoveDespesa(id)}>
          {loading ? (
            <ActivityIndicator size={16} color="#fff" />
          ) : (
            <TextButton>REMOVER</TextButton>
          )}
        </ButtonRemove>
      </GpButton>
    </Container>
  );
}

export default Updates;
