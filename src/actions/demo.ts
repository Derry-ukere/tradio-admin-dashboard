import * as DemoType from '../interfaces/demo';
import * as DemoConstants from '../constants/demo';
import { Dispatch } from 'react';
import axios from 'axios';

export const  DemoActions = {
  main : () => async (dispatch :Dispatch <DemoType.actionType> )=>{
    try {
      dispatch({
        type:DemoConstants.DEMO_LOADING
      });

      const {data} = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');

      dispatch({
        type:DemoConstants.DEMO_SUCCESS,
        payload:data
      });
        
    } catch (error) {
      dispatch({
        type:DemoConstants.DEMO_FAIL,
        error: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  },
};

export default DemoActions;
