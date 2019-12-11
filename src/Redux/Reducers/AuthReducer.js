import {usersApi} from "../../Api/Api";
import {setUserProfile} from "./ProfileReducer";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    Id: null,
    email : null,
    login : null,
    isFetching : false,
    isAuth : false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.data,
                isAuth:  true
            };
        }
        default : return state;
    }
};
export const setAuthUserData = (data) =>{
    return {
        type : SET_USER_DATA,
        data
    }
};

export const getAuthInfo = (userId) =>{
    return (dispatch) =>{
        usersApi.getAuthInfo().then(
            data => {
                if(data.resultCode === 0){
                    dispatch(setAuthUserData(data.data));
                }
            })
    }
};

export default authReducer;