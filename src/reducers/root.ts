import { combineReducers } from 'redux';
import DemoReducers from './demo';
import LoginReducer from './login';
import RegisterReducer from './register';
import AllClient from './getAllClientRed';
import OneClient from './getOneClientRed';
import Update from './updateAmount';

export const rootReducer = combineReducers({
  demo:DemoReducers.demo,
  login:LoginReducer.login,
  register:RegisterReducer.register,
  clients:AllClient.get,
  client:OneClient.get,
  updateAmountState:Update.get,
});
