import * as loginTypes from '../interfaces/login';
import * as constants from '../constants/login';

const defaultState = {
  loading: false,
};

export default class DemoReducers {
    
    static  login = (state:loginTypes.initalState = defaultState, action:loginTypes.actionType ) : loginTypes.initalState  => {
      switch (action.type) {
        case constants.LOGIN_LOADING:
          return {
            loading : true
          };
        case constants.LOGIN_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.LOGIN_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };
}












