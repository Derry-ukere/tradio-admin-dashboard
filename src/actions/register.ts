import * as registerTypes from '../interfaces/register';
import * as registerConstants from '../constants/register';
import { Dispatch } from 'react';
import axios from 'axios';

export const  registerAction = {
  register : (username: string, password: string,email:string) => async (dispatch :Dispatch <registerTypes.actionType> )=>{
    try {
      dispatch({
        type:registerConstants.REGISTER_LOADING,
        loading: true,

      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const {data} = await axios.post(`https://tradio-client-services.herokuapp.com/api/auth/register?username=${username}&password=${password}&email=${email}`,config);

      dispatch({
        type:registerConstants.REGISTER_SUCCESS,
        loading: false,
        payload:data
      });
        
    } catch (error) {
      dispatch({
        type:registerConstants.REGISTER_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
};

