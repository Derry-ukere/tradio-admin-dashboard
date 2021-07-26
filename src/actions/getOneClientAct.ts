import * as allClientsTypes from '../interfaces/getOneClient';
import * as allClientsConstants from '../constants/getSingleClient';
import { Dispatch } from 'react';
import axios from 'axios';

export const  loadingAction = {
  main : (id : string) => async (dispatch :Dispatch <allClientsTypes.actionType> )=>{
    try {
      dispatch({
        type:allClientsConstants.GET_ONE_CLIENT_LOADING,
        loading: true,

      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const {data} = await axios.get(`https://tradio-client-services.herokuapp.com/api/client/lookupWithId?id=${id}`,config);
     
      dispatch({
        type:allClientsConstants.GET_ONE_CLIENT_SUCCESS,
        loading: false,
        payload:data
      });
        
    } catch (error) {
      dispatch({
        type:allClientsConstants.GET_ONE_CLIENT_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
};

export default loadingAction;
