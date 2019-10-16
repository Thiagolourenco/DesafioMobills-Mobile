import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  getDespesaSuccess: ['data'],
  getDespesaRequest: null,
});

export const DespesaTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
});

export const success = (state, {data}) => state.merge({data});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_DESPESA_SUCCESS]: success,
});