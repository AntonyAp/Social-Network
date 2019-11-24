import React from "react";
import cl from './Posts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Reducers/PostsReducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        postsList : state.postsPage.postsList,
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