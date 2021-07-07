import { combineReducers } from 'redux';
import DemoReducers from './demo';
import LoginReducer from './login';
import RegisterReducer from './register';

export const rootReducer = combineReducers({
  demo:DemoReducers.demo,
  login:LoginReducer.login,
  register:RegisterReducer.register
});
