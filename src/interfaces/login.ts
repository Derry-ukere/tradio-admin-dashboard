import { LOGIN_FAIL,LOGIN_LOADING,LOGIN_SUCCESS } from '../constants/login';

export interface res {
  'data': {
    '_id': '60fdb1f7f35aea00157493bd',
    'name': 'Morrisson',
    'email': 'ukderry@gmail.com',
    'password': string,
    '__v': 0
  },
  'token': string
}
 

export interface LOGIN_FAIL {
    type: typeof LOGIN_FAIL
    loading: boolean,
    error: typeof Error
}

export interface LOGIN_LOADING {
    type: typeof LOGIN_LOADING
    loading: boolean,

}



export type actionType = LOGIN_FAIL | LOGIN_LOADING | LOGIN_SUCCESS;


export interface LOGIN_SUCCESS {
    type: typeof LOGIN_SUCCESS,
    loading: boolean,
    payload: res
}
export interface initalState {
    loading: boolean,
    payload?: res,
    error?: typeof Error

}
