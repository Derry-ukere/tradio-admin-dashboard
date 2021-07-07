import { combineReducers } from 'redux';
import DemoReducers from './demo';

export const rootReducer = combineReducers({
  demo:DemoReducers.demo
});


