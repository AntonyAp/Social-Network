import {profileApi} from "../../Api/Api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    postsList: [
        {id: 1, text: "Hello"},
        {id: 2, text: "Bye"},
        {id: 3, text: "What a nice day"}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 8,
                text: action.newPostText
            };
            return {
                ...state,
                postsList: [...state.postsList, newPost],
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
export const addPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
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

export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profileApi.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getUserStatus = (userId) => async (dispatch) => {
    const data = await profileApi.getStatus(userId);
    dispatch(setUserStatus(data));

};

export const updateUserStatus = (status) => async (dispatch) => {
    const data = await profileApi.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export default profileReducer;