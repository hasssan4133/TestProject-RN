import {combineReducers} from 'redux';
import auth from './Reducers/API/reducers';

const reducers = combineReducers({
  auth,
});
export default reducers;
