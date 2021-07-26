import { GET_ONE_CLIENT_FAIL,GET_ONE_CLIENT_LOADING,GET_ONE_CLIENT_SUCCESS } from '../constants/getSingleClient';

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

 type res = client;

 

export interface GET_ONE_CLIENT_FAIL {
    type: typeof GET_ONE_CLIENT_FAIL
    loading: boolean,
    error: typeof Error
}

export interface GET_ONE_CLIENT_LOADING {
    type: typeof GET_ONE_CLIENT_LOADING
    loading: boolean,

}



export type actionType = GET_ONE_CLIENT_FAIL | GET_ONE_CLIENT_LOADING | GET_ONE_CLIENT_SUCCESS;


export interface GET_ONE_CLIENT_SUCCESS {
    type: typeof GET_ONE_CLIENT_SUCCESS,
    loading: boolean,
    payload: res
}
export interface initalState {
    loading: boolean,
    payload?: res,
    error?: typeof Error

}
