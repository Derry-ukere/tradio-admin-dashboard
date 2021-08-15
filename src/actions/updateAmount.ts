import * as LoginTypes from '../interfaces/updateAmount';
import * as LoginConstants from '../constants/updateAmount';
import { Dispatch } from 'react';
import axios from 'axios';

export const  UpdateAccountDetails = {
  updateAmountFunc : (id: string, amount: number) => async (dispatch :Dispatch <LoginTypes.actionType> )=>{
    try {
      dispatch({
        type:LoginConstants.UPDATE_AMOUNT_LOADING,
        loading: true,

      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const {data} = await axios.put(`https://tradio-client-services.herokuapp.com/api/client/upate/balance?id=${id}&amount=${amount}`,config);
      // localStorage.setItem('adminInfo', JSON.stringify(data));
     
      dispatch({
        type:LoginConstants.UPDATE_AMOUNT_SUCCESS,
        loading: false,
        payload:data
      });
        
    } catch (error) {
      dispatch({
        type:LoginConstants.UPDATE_AMOUNT_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },

  updateProfitFunc : (id: string, profit: number) => async (dispatch :Dispatch <LoginTypes.actionType> )=>{
    try {
      dispatch({
        type:LoginConstants.UPDATE_AMOUNT_LOADING,
        loading: true,

      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const {data} = await axios.put(`https://tradio-client-services.herokuapp.com/api/client/upate/profit?id=${id}&amount=${profit}`,config);
      // localStorage.setItem('adminInfo', JSON.stringify(data));
     
      dispatch({
        type:LoginConstants.UPDATE_AMOUNT_SUCCESS,
        loading: false,
        payload:data
      });
        
    } catch (error) {
      dispatch({
        type:LoginConstants.UPDATE_AMOUNT_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
};



