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
}












