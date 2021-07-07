import { REGISTER_FAIL,REGISTER_LOADING,REGISTER_SUCCESS } from '../constants/register';

export interface res {
  message: 'User created sucessfully'
}
 
export interface REGISTER_FAIL {
    type: typeof REGISTER_FAIL
    loading: boolean,
    error: typeof Error
}

export interface REGISTER_LOADING {
    type: typeof REGISTER_LOADING
    loading: boolean,
}

export type actionType = REGISTER_FAIL | REGISTER_LOADING | REGISTER_SUCCESS;

export interface REGISTER_SUCCESS {
    type: typeof REGISTER_SUCCESS,
    loading: boolean,
    payload: res
}
export interface initalState {
    loading: boolean,
    payload?: res,
    error?: typeof Error

}
