import { LOGIN_FAIL,LOGIN_LOADING,LOGIN_SUCCESS } from '../constants/login';

export interface res {
  data: {
       overview: {
        balance: number,
        emailVerified: boolean,
        blocked: boolean,
        justDeposited: boolean,
        bankDetailsProvided: boolean,
        cardDetailsProvided: boolean
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
    token: string
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
