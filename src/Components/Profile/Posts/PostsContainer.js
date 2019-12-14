import React from "react";
import {addPost} from "../../../Redux/Reducers/ProfileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        postsList : state.profilePage.postsList,
        newPostText : state.newPostText
    }
};

const PostsContainer = connect(mapStateToProps, {addPost})(Posts);

export default PostsContainer;