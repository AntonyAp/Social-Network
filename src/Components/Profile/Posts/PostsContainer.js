import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Reducers/ProfileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        postsList : state.profilePage.postsList,
        newPostText : state.newPostText
    }
};

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost : () => dispatch(addPostActionCreator()),
        onTextChange : (text) => dispatch(updateNewPostTextActionCreator(text))
    }
};
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;