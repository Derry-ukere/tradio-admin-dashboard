
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './reducers/root';
import thunk from 'redux-thunk';

const store  = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type RootStore = ReturnType<typeof rootReducer>
export default store;

