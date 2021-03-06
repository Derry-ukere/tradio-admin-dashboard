import { 
  GET_ONE_CLIENT_FAIL,
  GET_ONE_CLIENT_LOADING,
  GET_ONE_CLIENT_SUCCESS,
  DELETE_ONE_CLIENT_FAIL,
  DELETE_ONE_CLIENT_LOADING,
  DELETE_ONE_CLIENT_SUCCESS,
  WARN_ONE_CLIENT_FAIL,
  WARN_ONE_CLIENT_LOADING,
  WARN_ONE_CLIENT_SUCCESS ,
  REMOVEWARN_ONE_CLIENT_FAIL,
  REMOVEWARN_ONE_CLIENT_LOADING,
  REMOVEWARN_ONE_CLIENT_SUCCESS,
  SEND_MAIL_LOADING,
  SEND_MAIL_FAIL,
  SEND_MAIL_SUCCESS,

} from '../constants/getSingleClient';

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
     PermAddress: string
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
     profit : number,
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
   fullname: string,
   warn : boolean,
   password: string,
   __v: 0
 }

 type res = client;

export interface SEND_MAIL_FAIL {
  type: typeof SEND_MAIL_FAIL
  loading: boolean,
  error: typeof Error
}

export interface SEND_MAIL_LOADING {
  type: typeof SEND_MAIL_LOADING
  loading: boolean,
}

export interface SEND_MAIL_SUCCESS {
  type: typeof SEND_MAIL_SUCCESS,
  loading: boolean,
  payload: any
}


export interface GET_ONE_CLIENT_FAIL {
    type: typeof GET_ONE_CLIENT_FAIL
    loading: boolean,
    error: typeof Error
}

export interface DELETE_ONE_CLIENT_FAIL {
  type: typeof DELETE_ONE_CLIENT_FAIL
  loading: boolean,
  error: typeof Error
}

export interface WARN_ONE_CLIENT_FAIL {
  type: typeof WARN_ONE_CLIENT_FAIL
  loading: boolean,
  error: typeof Error
}
export interface WARN_ONE_CLIENT_LOADING {
  type: typeof WARN_ONE_CLIENT_LOADING
  loading: boolean,
}
export interface WARN_ONE_CLIENT_SUCCESS {
  type: typeof WARN_ONE_CLIENT_SUCCESS,
  loading: boolean,
  payload: any
}

export interface REMOVEWARN_ONE_CLIENT_FAIL {
  type: typeof REMOVEWARN_ONE_CLIENT_FAIL
  loading: boolean,
  error: typeof Error
}

export interface REMOVEWARN_ONE_CLIENT_LOADING {
  type: typeof REMOVEWARN_ONE_CLIENT_LOADING
  loading: boolean,
}

export interface REMOVEWARN_ONE_CLIENT_SUCCESS {
  type: typeof REMOVEWARN_ONE_CLIENT_SUCCESS,
  loading: boolean,
  payload: any
}

export interface GET_ONE_CLIENT_LOADING {
    type: typeof GET_ONE_CLIENT_LOADING
    loading: boolean,

}

export interface DELETE_ONE_CLIENT_LOADING {
  type: typeof DELETE_ONE_CLIENT_LOADING
  loading: boolean,
}


export type actionType = GET_ONE_CLIENT_FAIL | GET_ONE_CLIENT_LOADING | GET_ONE_CLIENT_SUCCESS;
export type deletClientactionType = DELETE_ONE_CLIENT_FAIL | DELETE_ONE_CLIENT_LOADING | DELETE_ONE_CLIENT_SUCCESS;
export type warnClientactionType = WARN_ONE_CLIENT_FAIL | WARN_ONE_CLIENT_LOADING | WARN_ONE_CLIENT_SUCCESS;
export type removeWarnClientactionType = REMOVEWARN_ONE_CLIENT_FAIL | REMOVEWARN_ONE_CLIENT_LOADING | REMOVEWARN_ONE_CLIENT_SUCCESS;
export type sendMailActionTypes = SEND_MAIL_FAIL | SEND_MAIL_LOADING | SEND_MAIL_SUCCESS;





export interface GET_ONE_CLIENT_SUCCESS {
    type: typeof GET_ONE_CLIENT_SUCCESS,
    loading: boolean,
    payload: res
}

export interface DELETE_ONE_CLIENT_SUCCESS {
  type: typeof DELETE_ONE_CLIENT_SUCCESS,
  loading: boolean,
  payload: res
}

export interface initalState {
    loading: boolean,
    payload?: res,
    error?: typeof Error
}

export interface deleteInitalState {
  loading: boolean,
  payload?: res,
  error?: typeof Error
}

export interface warnInitalState {
  loading: boolean,
  payload?: any,
  error?: typeof Error
}

export interface RemoveWarnInitalState {
  loading: boolean,
  payload?: any,
  error?: typeof Error
}

export interface sendMailInitalState {
  loading: boolean,
  payload?: any,
  error?: typeof Error
}
