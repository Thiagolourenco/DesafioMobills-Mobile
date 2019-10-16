import {combineReducers} from 'redux';

import {reducer as despesa} from './despesa';
export default combineReducers({
  despesa,
});
