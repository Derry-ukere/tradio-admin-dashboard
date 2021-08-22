import * as allClientsTypes from '../interfaces/getOneClient';
import * as allClientsConstants from '../constants/getSingleClient';
import { Dispatch } from 'react';
import axios from 'axios';

export const  singleClientAction = {
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
  deleteClient : (id : string) => async (dispatch :Dispatch <allClientsTypes.deletClientactionType> )=>{
    console.log('called action');
    try {
      dispatch({
        type:allClientsConstants.DELETE_ONE_CLIENT_LOADING,
        loading: true,

      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const {data} = await axios.delete(`https://tradio-client-services.herokuapp.com/api/client/delete?id=${id}`,config);
     
      dispatch({
        type:allClientsConstants.DELETE_ONE_CLIENT_SUCCESS,
        loading: false,
        payload:data
      });
        
    } catch (error) {
      dispatch({
        type:allClientsConstants.DELETE_ONE_CLIENT_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },

  warnClient : (id : string) => async (dispatch :Dispatch <allClientsTypes.warnClientactionType> )=>{
    try {
      dispatch({
        type:allClientsConstants.WARN_ONE_CLIENT_LOADING,
        loading: true,
      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const {data} = await axios.put(`https://tradio-client-services.herokuapp.com/api/client//upate/warnCandidate?id=${id}`,config);
     
      dispatch({
        type:allClientsConstants.WARN_ONE_CLIENT_SUCCESS,
        loading: false,
        payload:data
      });
        
    } catch (error) {
      dispatch({
        type:allClientsConstants.WARN_ONE_CLIENT_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
  
  removeWarnClient : (id : string) => async (dispatch :Dispatch <allClientsTypes.removeWarnClientactionType> )=>{
    try {
      dispatch({
        type:allClientsConstants.REMOVEWARN_ONE_CLIENT_LOADING,
        loading: true,
      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const {data} = await axios.put(`https://tradio-client-services.herokuapp.com/api/client//upate/RemoveWarnCandidate?id=${id}`,config);
     
      dispatch({
        type:allClientsConstants.REMOVEWARN_ONE_CLIENT_SUCCESS,
        loading: false,
        payload:data
      });
        
    } catch (error) {
      dispatch({
        type:allClientsConstants.REMOVEWARN_ONE_CLIENT_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
  sendMail : (message : string,emailAdress : string ) => async (dispatch :Dispatch <allClientsTypes.sendMailActionTypes> )=>{
    try {
      dispatch({
        type:allClientsConstants.SEND_MAIL_LOADING,
        loading: true,
      });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      await axios.post(`https://tradio-client-services.herokuapp.com/api/client/sendCasualMail?email=${message}&emailAdress=${emailAdress}`,config);
     
      dispatch({
        type:allClientsConstants.SEND_MAIL_SUCCESS,
        loading: false,
        payload:'message sent'
      });
        
    } catch (error) {
      dispatch({
        type:allClientsConstants.SEND_MAIL_FAIL,
        loading: false,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
};

