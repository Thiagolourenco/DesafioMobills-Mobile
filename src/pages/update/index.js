import React, {Component} from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  DatePickerAndroid,
  Picker,
  TouchableOpacity,
  Text,
} from 'react-native';
import firebase from 'react-native-firebase';

import backArrow from '../../assests/left-arrow.png';
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
  InputDate,
  InputDateText,
  Header,
  InputOp,
} from './style';

class Updates extends Component {
  state = {
    data: [],
    name: '',
    desc: '',
    valor: '',
    diaCompra: 'Dia Da Compra',
    date: new Date(),
    op: false,
    loading: false,
    loadingUp: false,
    pago: null,
  };

  /**
   * Função para mostrar o calendario no android, para atualizar a
   * a data de nascimento do cliente
   */

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

  /**
   * Carrega os dados do cliente, através do id
   */
  async componentDidMount() {
    const {navigation} = this.props;
    const id = navigation.getParam('id');

    const ref = firebase
      .firestore()
      .collection('despesa')
      .doc(id);
    ref.get().then(doc => {
      this.setState({
        name: doc.data().name,
        desc: doc.data().descricao,
        valor: doc.data().valor,
        diaCompra: doc.data().diaCompra,
        pago: doc.data().pago,
      });
    });
  }
  /**
   * Delete o cliente, atráves do ID
   */

  handleDeleteDespesa = async id => {
    const {navigation} = this.props;
    this.setState({
      loading: true,
    });
    await firebase
      .firestore()
      .collection('despesa')
      .doc(id)
      .delete();

    setTimeout(() => {
      this.setState({
        loading: false,
      });
      navigation.navigate('Home');
    }, 3000);
  };

  /*
   * Atualiza os Dados do cliente
   */

  handleUpdateDespesa = async id => {
    const {name, desc, valor, diaCompra, pago} = this.state;
    const {navigation} = this.props;
    this.setState({
      loadingUp: true,
    });
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
      this.setState({
        loadingUp: false,
      });
      navigation.navigate('Home');
    }, 3000);
  };

  handleGoBack = () => {
    const {navigation} = this.props;
    navigation.navigate('Home');
  };

  render() {
    const {navigation} = this.props;
    const id = navigation.getParam('id');
    const {
      name,
      valor,
      desc,
      diaCompra,
      loading,
      loadingUp,
      date,
      pago,
    } = this.state;

    return (
      <Container>
        <Header>
          <ButtonBack onPress={this.handleGoBack}>
            <Image source={backArrow} />
          </ButtonBack>
          <Title>Info das Despesas</Title>
        </Header>
        <View>
          <TextIn>Nome da Despesa</TextIn>
          <Input
            value={name}
            onChangeText={text => this.setState({name: text})}
          />
        </View>

        <View>
          <TextIn>Descrição</TextIn>
          <Input
            value={desc}
            onChangeText={text => this.setState({desc: text})}
          />
        </View>

        <View>
          <TextIn>Valor</TextIn>
          <Input
            keyboardType={'numeric'}
            value={valor}
            onChangeText={text => this.setState({valor: text})}
          />
        </View>
        <View>
          <TextIn>Data da Compra</TextIn>

          <InputDate onPress={() => this.showDatePicker({date})}>
            <InputDateText>{diaCompra}</InputDateText>
          </InputDate>
        </View>
        <View>
          <TextIn>Pago</TextIn>
          <InputOp
            selectedValue={pago}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({pago: itemValue})
            }>
            <Picker.Item label="Escolha opção" value="" />
            <Picker.Item label="SIM" value={true} />
            <Picker.Item label="NÃO" value={false} />
          </InputOp>
        </View>
        <GpButton>
          <ButtonUpdate onPress={() => this.handleUpdateDespesa(id)}>
            {loadingUp ? (
              <ActivityIndicator size={16} color="#fff" />
            ) : (
              <TextButton>ATUALIZAR</TextButton>
            )}
          </ButtonUpdate>
          <ButtonRemove onPress={() => this.handleDeleteDespesa(id)}>
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
}

export default Updates;
