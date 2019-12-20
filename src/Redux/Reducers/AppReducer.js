import {getAuthInfo} from "./AuthReducer";

const INITIALIZE = "INITIALIZE";

let initialState = {
    initialized : false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE : {
            return {
                ...state,
                initialized: true
            };
        }
        default : return state;
    }
};
export const appInitialized = () =>{
    return {
        type : INITIALIZE,
    }
};

export const initializeApp = () =>{
    return (dispatch) =>{
        let authInfo = dispatch(getAuthInfo());

        Promise.all([authInfo]).then(
            () =>{
                dispatch(appInitialized());
            }
        );
    }
};

export default appReducer;