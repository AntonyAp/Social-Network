import React from "react";
import cl from './Posts.module.css';
import Post from "./Post/Post";
import AddPostForm from "./Post/AddPostForm";

const Posts = (props) => {
    let mappedPosts = props.postsList.map(post => <Post id = {post.id} message = {post.text}/>);

     let addPost = (formData) => {
         props.addPost(formData.newPostText);
     };

    return <div>
        <AddPostForm onSubmit={addPost}/>
        <div className={cl.posts}>
            {mappedPosts}
        </div>
    </div>
};

export default Posts;