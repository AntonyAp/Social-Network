import {combineReducers, createStore} from "redux";
import dialogsReducer from "./Reducers/DialogsReducer";
import postsReducer from "./Reducers/PostsReducer";
import usersReducer from "./Reducers/UsersReducer";

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    postsPage: postsReducer,
    usersPage : usersReducer
});
const store = createStore(reducers);
export default store;