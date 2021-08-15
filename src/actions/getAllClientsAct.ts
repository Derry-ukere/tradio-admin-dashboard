import * as allClientsTypes from '../interfaces/getAllClient';
import * as allClientsConstants from '../constants/getAllClients';
import { Dispatch } from 'react';
import axios from 'axios';

export const  loadingAction = {
  main : () => async (dispatch :Dispatch <allClientsTypes.actionType> )=>{
    try {
      dispatch({
        type:allClientsConstants.GET_ALL_CLIENT_LOADING,
        loading: true,

      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const {data} = await axios.get('https://tradio-client-services.herokuapp.com/api/client/lookup/all',config);
      // localStorage.setItem('adminInfo', JSON.stringify(data));
     
      dispatch({
        type:allClientsConstants.GET_ALL_CLIENT_SUCCESS,
        loading: false,
        payload:data
      });
        
    } catch (error) {
      dispatch({
        type:allClientsConstants.GET_ALL_CLIENT_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
  getAllAdmin : () => async (dispatch :Dispatch <allClientsTypes.getAminactionType> )=>{
    try {
      dispatch({
        type:allClientsConstants.GET_ALL_ADMIN_LOADING,
        loading: true,

      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const {data} = await axios.get('https://mighty-journey-39185.herokuapp.com/api/admin/lookup/all',config);
      // localStorage.setItem('adminInfo', JSON.stringify(data));
     
      dispatch({
        type:allClientsConstants.GET_ALL_ADMIN_SUCCESS,
        loading: false,
        payload:data
      });
        
    } catch (error) {
      dispatch({
        type:allClientsConstants.GET_ALL_ADMIN_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
};

export default loadingAction;
