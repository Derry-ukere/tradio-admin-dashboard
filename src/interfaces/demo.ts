import { DEMO_FAIL,DEMO_LOADING,DEMO_SUCCESS } from '../constants/demo';

export interface res {
    time:{},
    disclaimer:string,
    chartName:string,
    bpi:{}
 }

export interface DEMO_FAIL {
    type: typeof DEMO_FAIL
    error: typeof Error
}

export interface DEMO_LOADING {
    type: typeof DEMO_LOADING
}



export type actionType = DEMO_FAIL | DEMO_LOADING | DEMO_SUCCESS;


export interface DEMO_SUCCESS {
    type: typeof DEMO_SUCCESS,
    payload: res
}
export interface initalState {
    loading: boolean,
    payload?: res,
    error?: typeof Error

}
