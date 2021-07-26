import * as clientTypes from '../interfaces/getAllClient';
import * as constants from '../constants/getAllClients';

const defaultState = {
  loading: false,
};

export default class getClientReducers {
    
    static  get = (state:clientTypes.initalState = defaultState, action:clientTypes.actionType ) : clientTypes.initalState  => {
      switch (action.type) {
        case constants.GET_ALL_CLIENT_LOADING:
          return {
            loading : true
          };
        case constants.GET_ALL_CLIENT_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.GET_ALL_CLIENT_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };
}












