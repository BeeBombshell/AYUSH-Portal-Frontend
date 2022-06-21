import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./fetchPost.css";

const PostMap = (props) => {
    const { isLoggedIn, username, password, user_id, login, logout } = useContext(AuthContext);
    console.log(props.posts)
    const PostList = props.posts.map((post) => {
        return (
            <div key={post.id} className="PostCard">
                <div className="card">
                    <div className="card-header">
                        <h5>Author: {username}</h5>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{post.title.rendered}</h3>
                        <div className="card-text">{post.content.rendered}</div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {PostList}
        </div>
    )
}

export default PostMap