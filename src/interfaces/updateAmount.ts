import { UPDATE_AMOUNT_FAIL,UPDATE_AMOUNT_LOADING,UPDATE_AMOUNT_SUCCESS,UPDATE_PROFIT_LOADING,UPDATE_PROFIT_SUCCESS,UPDATE__PROFIT_FAIL } from '../constants/updateAmount';

export interface res {
  overview: {
   balance: number,
   emailVerified: boolean,
   blocked: boolean,
   justDeposited: boolean,
   bankDetailsProvided: boolean,
   cardDetailsProvided: boolean,
   name: string
   address: string
   city:string
   dob:string
 },
 cardDetails: {
   name: string,
   number: number,
   cvc: number,
   expiry: number,
   postalCode: number
 },
 bankDetails: {
   accountNumber: number
 },
 wallet: {
   availableBtc: number,
   totalEquity: number,
   availableMargin: number,
   depositThisMonth: number,
   lastDeposit: number
 },
 affiliateStatus: {
   total: number,
   previousDay: number
 },
 affiliatePayout: {
   freePaidAmount: number,
   level: number,
   totalPayouts: number
 },
 maintainance: number,
 unrealizedPl: number,
 openPosition: number,
 activeOders: number,
 _id: string,
 username: string,
 email: string,
 password: string,
 __v: 0
}
 

export interface UPDATE_AMOUNT_FAIL {
    type: typeof UPDATE_AMOUNT_FAIL
    loading: boolean,
    error: typeof Error
}


export interface UPDATE__PROFIT_FAIL {
  type: typeof UPDATE__PROFIT_FAIL
  loading: boolean,
  error: typeof Error
}
export interface UPDATE_AMOUNT_LOADING {
    type: typeof UPDATE_AMOUNT_LOADING
    loading: boolean,

}

export interface UPDATE_PROFIT_LOADING {
  type: typeof UPDATE_PROFIT_LOADING
  loading: boolean,

}



export type actionType = UPDATE_AMOUNT_FAIL | UPDATE_AMOUNT_LOADING | UPDATE_AMOUNT_SUCCESS;

export type profitActionType = UPDATE__PROFIT_FAIL | UPDATE_PROFIT_LOADING | UPDATE_PROFIT_SUCCESS;



export interface UPDATE_AMOUNT_SUCCESS {
    type: typeof UPDATE_AMOUNT_SUCCESS,
    loading: boolean,
    payload: res
}

export interface UPDATE_PROFIT_SUCCESS {
  type: typeof UPDATE_PROFIT_SUCCESS,
  loading: boolean,
  payload: res
}


export interface initalState {
    loading: boolean,
    payload?: res,
    error?: typeof Error

}

export interface UpdateProfitinitalState {
  loading: boolean,
  payload?: res,
  error?: typeof Error

}
