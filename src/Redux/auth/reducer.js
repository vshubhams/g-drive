import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "./actionTypes";
const initState = {
    currentUser: {},
    signOut:""
};

export const authReducer = (state=initState,{type,payload})=>{
    switch(type){
        case SIGN_UP_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case SIGN_UP_SUCCESS:{
            return {
               ...state,
               isAuth:true,
               currentUser:payload,
               isLoading:false,
               isError:false
            }
        }
        case SIGN_UP_FAILURE:{
            return {
                ...state,
                isAuth:false,
                isLoading:false,
                isError:true
            }
        }
        default:
            return state
    }

};