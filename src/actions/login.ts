import * as LoginTypes from '../interfaces/login';
import * as LoginConstants from '../constants/login';
import { Dispatch } from 'react';
import axios from 'axios';

export const  loadingAction = {
  main : (email: string, password: string) => async (dispatch :Dispatch <LoginTypes.actionType> )=>{
    try {
      dispatch({
        type:LoginConstants.LOGIN_LOADING,
        loading: true,

      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const {data} = await axios.post(`https://mighty-journey-39185.herokuapp.com/api/auth/login?email=${email}&password=${password}`,config);
      localStorage.setItem('adminInfo', JSON.stringify(data));
     
      dispatch({
        type:LoginConstants.LOGIN_SUCCESS,
        loading: false,
        payload:data
      });
        
    } catch (error) {
      dispatch({
        type:LoginConstants.LOGIN_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
};

export default loadingAction;
