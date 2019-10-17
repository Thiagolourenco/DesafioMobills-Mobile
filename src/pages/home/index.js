import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import firebase from 'react-native-firebase';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  List,
  ListName,
  AmountExpense,
  Title,
  ButtonAdd,
  Footer,
  ButtonLogout,
} from './style';

function Home({navigation}) {
  const [data, setData] = useState([]);

  const ref = firebase.firestore().collection('despesa');

  /**
   * Carrega dados das depesas, assim que o a tela home é iniciada
   * Também é carregado, os dados do usuário como o Nome
   */

  useEffect(() => {
    function loadDespesas() {
      return ref.onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
          const {diaCompra, descricao, name, pago, valor} = doc.data();
          list.push({
            id: doc.id,
            diaCompra,
            descricao,
            name,
            pago,
            valor,
          });
        });
        setData(list);
      });
    }
    loadDespesas();
  }, []);

  function handleLogout() {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }

  function handleCadastrar() {
    navigation.navigate('Register');
  }

  function handleUpdate(id) {
    navigation.navigate('Updates', {id});
  }

  return (
    <Container>
      <ButtonLogout onPress={handleLogout}>
        <Title>SAIR</Title>
      </ButtonLogout>
      <FlatList
        data={data}
        style={{flex: 1}}
        renderItem={({item}) => (
          <List onPress={() => handleUpdate(item.id)}>
            <View>
              <ListName>Nome: {item.name}</ListName>
              <AmountExpense>Valor: R$ {item.valor}</AmountExpense>
            </View>
          </List>
        )}
      />

      <Footer>
        <ButtonAdd onPress={handleCadastrar}>
          <Icon name="add" size={32} color="#fff" />
        </ButtonAdd>
      </Footer>
    </Container>
  );
}

export default Home;
