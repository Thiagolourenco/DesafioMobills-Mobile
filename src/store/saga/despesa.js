import {call, put} from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import DespesaAcions from '../ducks/despesa';

export function* getDespesa() {
  const response = yield call(firebase.firestore().collection(), 'despesa');

  put(DespesaAcions.getDespesaSuccess(response.data));
}
