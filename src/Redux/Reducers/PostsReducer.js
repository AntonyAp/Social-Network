const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
    postsList: [
        {id: 1, text: "Hello"},
        {id: 2, text: "Bye"},
        {id: 3, text: "What a nice day"}
    ],
    newPostText : "Nbl.by"
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newPostText
            };
        }
        case ADD_POST : {
            let newPost = {
                id : 8,
                text : state.newPostText
            };
            state.postsList.push(newPost);
            state.newPostText = "";
            return {
                ...state,
                postsList: [...state.postsList, newPost],
                newPostText: ''
            };
        }
        default : return state;
    }
};
export const addPostActionCreator = () =>{
    return {
        type : ADD_POST
    }
};
export const updateNewPostTextActionCreator = (newText) =>{
    return {
        type : UPDATE_NEW_POST_TEXT,
        newPostText : newText
    }
};
export default postsReducer;