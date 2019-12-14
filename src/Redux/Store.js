import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./Reducers/DialogsReducer";
import profileReducer from "./Reducers/ProfileReducer";
import usersReducer from "./Reducers/UsersReducer";
import authReducer from "./Reducers/AuthReducer";
import  thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage : usersReducer,
    auth : authReducer,
    form : formReducer
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;