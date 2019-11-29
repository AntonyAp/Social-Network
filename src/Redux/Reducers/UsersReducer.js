const FOLLOW = "FOLLOW ";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    usersList: [
      /*  {id: 1, photoUrl: 'http://nbl.by/media/bearleague/bl15724310211575.jpg',
            followed : false, fullName: "Anton Apanovich", status: "I am learning React", location : {country: 'Belarus', city : 'Minsk'}},
        {id: 7, photoUrl: 'http://nbl.by/media/bearleague/bl14407514771537.jpg',
            followed : false, fullName: "Oleg Kupriyanov", status: "Люблю считать определитель 3*3", location : {country: 'Belarus', city : 'Vitebsk'}},
        {id: 2, photoUrl: 'http://nbl.by/media/bearleague/bl15724310032523.jpg',
            followed : false, fullName: "Vasily Apanovich", status: "I am .NET developer", location : {country: 'Belarus', city : 'Minsk'}},
        {id: 3, photoUrl: 'http://nbl.by/media/bearleague/bl15723683821906.jpg',
            followed : true, fullName: "Valery Pukhalski", status: "I React developer", location : {country: 'Belarus', city : 'Minsk'}},
        {id: 4, photoUrl: 'http://nbl.by/media/bearleague/bl15738316422784.jpg',
            followed : false, fullName: "Alex Korbut", status: "I am learning Angular developer", location : {country: 'Belarus', city : 'Minsk'}},
        {id: 5, photoUrl: 'http://nbl.by/media/bearleague/bl1573831490552.jpg',
            followed : true, fullName: "Andrei Kostiv", status: "I am full-stack developer", location : {country: 'Belarus', city : 'Minsk'}},*/
    ],
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
            return {
                ...state,
                usersList: [...state.usersList, ...action.users]
            }
        }
        default : return state;
    }
};

export const followActionCreator = (userId) =>{
    return {
        type : FOLLOW,
        userId : userId
    }
};
export const unfollowActionCreator = (userId) =>{
    return {
        type : UNFOLLOW,
        userId : userId
    }
};
export const setUsersActionCreator = (users) =>{
    return {
        type : SET_USERS,
        users : users
    }
};
export default usersReducer;