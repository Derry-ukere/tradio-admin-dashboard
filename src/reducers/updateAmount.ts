import * as clientTypes from '../interfaces/updateAmount';
import * as constants from '../constants/updateAmount';

const defaultState = {
  loading: false,
};

export default class getClientReducers {
    
    static  get = (state:clientTypes.initalState = defaultState, action:clientTypes.actionType ) : clientTypes.initalState  => {
      switch (action.type) {
        case constants.UPDATE_AMOUNT_LOADING:
          return {
            loading : true
          };
        case constants.UPDATE_AMOUNT_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.UPDATE_AMOUNT_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };

    static  updateProfit = (state:clientTypes.UpdateProfitinitalState = defaultState, action:clientTypes.profitActionType ) : clientTypes.initalState  => {
      switch (action.type) {
        case constants.UPDATE_PROFIT_LOADING:
          return {
            loading : true
          };
        case constants.UPDATE_PROFIT_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.UPDATE__PROFIT_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };
}
