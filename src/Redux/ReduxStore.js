import {combineReducers, createStore} from "redux";
import dialogsReducer from "./Reducers/DialogsReducer";
import profileReducer from "./Reducers/ProfileReducer";
import usersReducer from "./Reducers/UsersReducer";
import authReducer from "./Reducers/AuthReducer";

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage : usersReducer,
    auth : authReducer
});
const store = createStore(reducers);
export default store;