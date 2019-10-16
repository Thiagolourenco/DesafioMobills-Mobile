import React, {useEffect, useState} from 'react';
import {View, Image, FlatList, Text} from 'react-native';
import firebase from 'react-native-firebase';

import add from '../../assests/add.png';
import arrowRight from '../../assests/right-arrow.png';

import {
  Container,
  List,
  ListName,
  DateOfBirth,
  ImageArrowRight,
  Title,
  ButtonAdd,
  Footer,
} from './style';

function Home({navigation}) {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  const ref = firebase.firestore().collection('despesa');

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUsers(user);
    });
  }, []);
  function handleCadastrar() {
    navigation.navigate('Register');
  }

  function handleUpdate(id) {
    navigation.navigate('Updates', {id});
  }

  return (
    <Container>
      <Title>Seja Bem-Vindo {users.displayName}</Title>
      <FlatList
        data={data}
        style={{flex: 1}}
        renderItem={({item}) => (
          <List onPress={() => handleUpdate(item.id)}>
            <View>
              <ListName>Nome: {item.name}</ListName>
              <DateOfBirth>Data da Compra: {item.diaCompra}</DateOfBirth>
            </View>
          </List>
        )}
      />

      <Footer>
        <ButtonAdd onPress={handleCadastrar}>
          <Image source={add} />
        </ButtonAdd>
      </Footer>
    </Container>
  );
}

export default Home;
