import * as demoTypes from '../interfaces/demo';
import * as constants from '../constants/demo';

const defaultState = {
  loading: false,
};

export default class DemoReducers {
    
    static  demo = (state:demoTypes.initalState = defaultState, action:demoTypes.actionType ) : demoTypes.initalState  => {
      switch (action.type) {
        case constants.DEMO_LOADING:
          return {
            loading : true
          };
        case constants.DEMO_SUCCESS:
          return {
            loading : false,
            payload:action.payload,
          }; 
        case constants.DEMO_FAIL:
          return {
            loading : false,
            error: action.error
          };    
          
        default:
          return state;
              
      }
    };
}












