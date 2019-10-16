import {call, put} from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import DespesaActions from '../ducks/despesa';

export function* getDespesa() {
  try {
    const ref = yield call(firebase.firestore().collection(), 'despesa');
    ref.onSnapshot(querySnapshot => {
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

      put(DespesaActions.getDespesaSuccess(list));
    });
  } catch (err) {
    alert(err);
  }
}
