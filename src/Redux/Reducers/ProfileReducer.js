import {profileApi} from "../../Api/Api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    postsList: [
        {id: 1, text: "Hello"},
        {id: 2, text: "Bye"},
        {id: 3, text: "What a nice day"}
    ],
    newPostText: "Nbl.by",
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newPostText
            };
        }
        case ADD_POST : {
            let newPost = {
                id: 8,
                text: state.newPostText
            };
            return {
                ...state,
                postsList: [...state.postsList, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS : {
            return {
                ...state,
                status: action.status
            };
        }
        default :
            return state;
    }
};
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateNewPostTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newText
    }
};
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
};

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then(
            data => {
                dispatch(setUserProfile(data));
            }
        );
    }
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then(
            data => {
                dispatch(setUserStatus(data));
            }
        );
    }
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            }
        );
    }
};

export default profileReducer;