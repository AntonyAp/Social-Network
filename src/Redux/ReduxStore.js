import {combineReducers, createStore} from "redux";
import dialogsReducer from "./Reducers/DialogsReducer";
import postsReducer from "./Reducers/PostsReducer";

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    postsPage: postsReducer
});
const store = createStore(reducers);
export default store;