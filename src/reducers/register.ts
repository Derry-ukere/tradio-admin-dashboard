import * as registerTypes from '../interfaces/register';
import * as constants from '../constants/register';

const defaultState = {
  loading: false,
};

export default class RegisterReducers {
    
    static  register = (state:registerTypes.initalState = defaultState, action:registerTypes.actionType ) : registerTypes.initalState  => {
      switch (action.type) {
        case constants.REGISTER_LOADING:
          return {
            loading : true
          };
        case constants.REGISTER_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.REGISTER_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };
}












