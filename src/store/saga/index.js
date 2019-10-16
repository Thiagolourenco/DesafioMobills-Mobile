import {takeLatest, all} from 'redux-saga/effects';

import {getDespesa} from './despesa';
import {DespesaTypes} from '../ducks/despesa';

export default function* rootSaga() {
  return yield all([takeLatest(DespesaTypes.GET_DESPESA_REQUEST, getDespesa)]);
}
