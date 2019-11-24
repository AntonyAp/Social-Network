import React from "react";
import cl from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let postText = React.createRef();
    let mappedPosts = props.postsList.map(post => <Post id = {post.id} message = {post.text}/>);

     let addPost = () => {
         props.addPost();
     };

     let onTextChange = () =>{
         let text = postText.current.value;
         props.onTextChange(text);
    };
    return <div>
        <div>
            <textarea onChange={onTextChange} ref = {postText} value = {props.newPostText}/>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={cl.posts}>
            {mappedPosts}
        </div>
    </div>
}

export default Posts;