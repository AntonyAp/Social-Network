import dialogsReducer from "./Reducers/DialogsReducer";
import postsReducer from "./Reducers/PostsReducer";

let store =  {
    _state :  {
        dialogsPage : {
            messageList: [
                {id: 1, text: "Hello friend"},
                {id: 2, text: "Hello"},
                {id: 3, text: "Скинь лабы"}
            ],
            dialogsList: [
                {id: 1, name: "Anton"},
                {id: 2, name: "Valera"},
                {id: 3, name: "Sanya"}
            ],
            newMessageText : ""
        },
        postsPage : {
            postsList: [
                {id: 1, text: "Hello"},
                {id: 2, text: "Bye"},
                {id: 3, text: "What a nice day"}
            ],
            newPostText : "Nbl.by"
        }
    },
    getState(){
        return this._state;
    },
    callSubscriber(state)  {
        console.log("store Changed");
    },
    dispatch(action){
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.postsPage = postsReducer(this._state.postsPage, action);
        this.callSubscriber(this._state);
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    }

};
export default store;