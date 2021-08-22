import { combineReducers } from 'redux';
import DemoReducers from './demo';
import LoginReducer from './login';
import RegisterReducer from './register';
import AllClient from './getAllClientRed';
import OneClient from './getOneClientRed';
import UpdateAmount from './updateAmount';

export const rootReducer = combineReducers({
  demo:DemoReducers.demo,
  login:LoginReducer.login,
  register:RegisterReducer.register,
  clients:AllClient.get,
  allAdmins:AllClient.getAllMin,
  client:OneClient.get,
  deleteClient:OneClient.deleteClient,
  warnClientState:OneClient.warnClient,
  removeWarnClientState:OneClient.RemovearnClient,
  senndMailState:OneClient.sendMail,
  updateAmountState:UpdateAmount.get,
  updateProfitState:UpdateAmount.updateProfit,
});
