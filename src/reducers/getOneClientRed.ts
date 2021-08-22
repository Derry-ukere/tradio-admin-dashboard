import * as clientTypes from '../interfaces/getOneClient';
import * as constants from '../constants/getSingleClient';

const defaultState = {
  loading: false,
};

export default class getClientReducers {
    
    static  get = (state:clientTypes.initalState = defaultState, action:clientTypes.actionType ) : clientTypes.initalState  => {
      switch (action.type) {
        case constants.GET_ONE_CLIENT_LOADING:
          return {
            loading : true
          };
        case constants.GET_ONE_CLIENT_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.GET_ONE_CLIENT_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };

    static  deleteClient = (state:clientTypes.deleteInitalState = defaultState, action:clientTypes.deletClientactionType ) : clientTypes.initalState  => {
      switch (action.type) {
        case constants.DELETE_ONE_CLIENT_LOADING:
          return {
            loading : true
          };
        case constants.DELETE_ONE_CLIENT_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.DELETE_ONE_CLIENT_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };

    static  warnClient = (state:clientTypes.warnInitalState = defaultState, action:clientTypes.warnClientactionType ) : clientTypes.initalState  => {
      switch (action.type) {
        case constants.WARN_ONE_CLIENT_LOADING:
          return {
            loading : true
          };
        case constants.WARN_ONE_CLIENT_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.WARN_ONE_CLIENT_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };

    static  RemovearnClient = (state:clientTypes.RemoveWarnInitalState = defaultState, action:clientTypes.removeWarnClientactionType ) : clientTypes.initalState  => {
      switch (action.type) {
        case constants.REMOVEWARN_ONE_CLIENT_LOADING:
          return {
            loading : true
          };
        case constants.REMOVEWARN_ONE_CLIENT_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.REMOVEWARN_ONE_CLIENT_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };

    static  sendMail = (state:clientTypes.sendMailInitalState = defaultState, action:clientTypes.sendMailActionTypes ) : clientTypes.initalState  => {
      switch (action.type) {
        case constants.SEND_MAIL_LOADING:
          return {
            loading : true
          };
        case constants.SEND_MAIL_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.SEND_MAIL_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };
}












