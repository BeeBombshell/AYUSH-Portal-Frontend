import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './fetchPost.css'

const PostCard = (props) => {
    let params = useParams();
    console.log(params.id);
    let posts = [];

    axios.get(`http://localhost/network/wp-json/wp/v2/posts/?author=${params.id}`, {
        auth: {
            username: "admin",
            password: "admin@123",
        }, 

    })
        .then(res => { 
            posts = res.data;
            // console.log(posts);
        })
        .catch(error => {
            console.log(error.response)
        });

    const PostList = posts.map((post) => {
        return (
            <div>
                <div key={post.id} className="PostCard">
                    <div className="card">
                        <div className="card-header">
                            <h5>Author</h5>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{post.title.rendered}</h3>
                            <div className="card-text">{post.content.rendered}</div>
                        </div>
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

export default PostCard;