/**
 * Configuração do Redux, como ele iria funcionar
 */

import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  getDespesaSuccess: ['data'],
  getDespesaRequest: null,
  createDespesaSuccess: ['name', 'descricao', 'diaCompra', 'valor'],
  createDespesaRequest: ['data'],
  deleteDespesaSuccess: ['id'],
  deleteDespesaRequest: ['data'],
  updateDespesaSuccess: ['name', 'descricao', 'diaCompra', 'valor', 'pago'],
  updateDespesaRequest: ['data'],
});

export const DespesaTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
});

export const success = (state, {data}) => state.merge({data});

export const createDespesa = (state, {data}) =>
  state.merge({data: [...state.data, data]});

export const deleteDespesa = (state, {id}) =>
  state.merge({
    data: state.data.map(desp => (desp.id === id ? {...desp} : desp)),
  });

export const updateDespesa = (
  state,
  {id, name, descricao, diaCompra, valor, pago},
) =>
  state.merge({
    data: [...state.data, id, name, descricao, diaCompra, valor, pago],
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_DESPESA_SUCCESS]: success,
  [Types.CREATE_DESPESA_SUCCESS]: createDespesa,
  [Types.DELETE_DESPESA_SUCCESS]: deleteDespesa,
  [Types.UPDATE_DESPESA_SUCCESS]: updateDespesa,
});
