const FOLLOW = "FOLLOW ";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    usersList: [],
    pageSize : 4,
    usersCount : 0,
    currentPage : 1,
    isFetching : false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW : {
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                return u;
                })
            }
        }
        case UNFOLLOW :  {
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS : {
            debugger;
            return {
                ...state,
                usersList:  [...action.users]
            }
        }
        case    SET_CURRENT_PAGE : {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_USERS_COUNT : {
            return {
                ...state,
                usersCount: action.usersCount
            }
        }

        case TOGGLE_IS_FETCHING : {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default : return state;
    }
};

export const follow = (userId) =>{
    return {
        type : FOLLOW,
        userId : userId
    }
};
export const unfollow = (userId) =>{
    return {
        type : UNFOLLOW,
        userId : userId
    }
};
export const setUsers = (users) =>{
    debugger;
    return {
        type : SET_USERS,
        users : users
    }
};

export const setCurrentPage = (currentPage) =>{
    return {
        type : SET_CURRENT_PAGE,
        currentPage: currentPage
    }
};
export const setUsersCount = (usersCount) =>{
    return {
        type : SET_USERS_COUNT,
        usersCount : usersCount
    }
};

export const toggleIsFetching = (isFetching) =>{
    return {
        type : TOGGLE_IS_FETCHING,
        isFetching : !isFetching
    }
};
export default usersReducer;