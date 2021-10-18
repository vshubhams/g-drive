import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "./actionTypes";
export const signUpRequest=()=>{
    return{
        type:SIGN_UP_REQUEST
    }
}

export const signUpSuccess = (payload)=>{
    return{
        type:SIGN_UP_SUCCESS,
        payload,
    }
}

export const signUpFailure = (error)=>{
    return {
        type:SIGN_UP_FAILURE,
        payload:error
    }
}