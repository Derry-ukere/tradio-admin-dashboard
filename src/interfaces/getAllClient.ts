import { GET_ALL_CLIENT_FAIL,GET_ALL_CLIENT_LOADING,GET_ALL_CLIENT_SUCCESS,GET_ALL_ADMIN_FAIL,GET_ALL_ADMIN_LOADING,GET_ALL_ADMIN_SUCCESS } from '../constants/getAllClients';

export interface client {
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

 type res = client[];

 

export interface GET_ALL_CLIENT_FAIL {
    type: typeof GET_ALL_CLIENT_FAIL
    loading: boolean,
    error: typeof Error
}

export interface GET_ALL_ADMIN_FAIL {
  type: typeof GET_ALL_ADMIN_FAIL
  loading: boolean,
  error: typeof Error
}

export interface GET_ALL_CLIENT_LOADING {
    type: typeof GET_ALL_CLIENT_LOADING
    loading: boolean,

}

export interface GET_ALL_ADMIN_LOADING {
  type: typeof GET_ALL_ADMIN_LOADING
  loading: boolean,

}



export type actionType = GET_ALL_CLIENT_FAIL | GET_ALL_CLIENT_LOADING | GET_ALL_CLIENT_SUCCESS;

export type getAminactionType = GET_ALL_ADMIN_FAIL | GET_ALL_ADMIN_LOADING | GET_ALL_ADMIN_SUCCESS;



export interface GET_ALL_CLIENT_SUCCESS {
    type: typeof GET_ALL_CLIENT_SUCCESS,
    loading: boolean,
    payload: res
}


export interface GET_ALL_ADMIN_SUCCESS {
  type: typeof GET_ALL_ADMIN_SUCCESS,
  loading: boolean,
  payload: any
}
export interface initalState {
    loading: boolean,
    payload?: res,
    error?: typeof Error

}


export interface AllAdminInitalState {
  loading: boolean,
  payload?: any,
  error?: typeof Error

}
