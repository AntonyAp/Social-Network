import {authApi} from "../../Api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA : {
            console.log(action);
            return {
                ...state,
                ...action.payload
            };
        }
        default :
            return state;
    }
};
export const setAuthUserData = (email, login, id, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {email, login, id, isAuth}
    }
};

export const getAuthInfo = () => async (dispatch) => {
    const data = await authApi.getAuthInfo();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(email, login, id, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await authApi.login(email, password, rememberMe = false);
    if (data.resultCode === 0) {
        dispatch(getAuthInfo());
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Incorrect credentials";
        dispatch(stopSubmit("login", {_error: message}));
    }
};


export const logout = () => async (dispatch) => {
    const data = await authApi.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;