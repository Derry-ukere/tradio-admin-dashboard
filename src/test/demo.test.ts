/* eslint-disable camelcase */
import  DemoReducers from '../reducers/demo';
const defaultState = {
  loading: false,
};
  
test('reducers', () => {
  const state = DemoReducers.demo(defaultState, {type:'DEMO_SUCCESS',payload:{time:{updated:'Jun 2, 2021 13:13:00 UTC',updatedISO:'2021-06-02T13:13:00+00:00',updateduk:'Jun 2, 2021 at 14:13 BST'},disclaimer:'This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org',chartName:'Bitcoin',bpi:{USD:{code:'USD',symbol:'&#36;',rate:'37,151.3477',description:'United States Dollar',rate_float:37151.3477},GBP:{code:'GBP',symbol:'&pound;',rate:'26,223.0559',description:'British Pound Sterling',rate_float:26223.0559},EUR:{code:'EUR',symbol:'&euro;',rate:'30,485.0956',description:'Euro',rate_float:30836.6043}}}});
  expect(state.payload?.disclaimer).toEqual('This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org');
});

