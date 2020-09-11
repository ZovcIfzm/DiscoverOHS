import {combineReducers} from 'redux';
import threadsReducer from './data/threadData/threads/threadsReducer';

export default combineReducers({
  data: threadsReducer,
});
