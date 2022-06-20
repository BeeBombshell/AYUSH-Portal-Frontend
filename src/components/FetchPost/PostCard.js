import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostMap from "./PostMap";
import './fetchPost.css';
import { useState } from "react";

const PostCard = (props) => {
    let params = useParams();
    console.log(params.id);
    let posts = [];
    let [post, setPost] = useState([]);

    axios.get(`http://localhost/network/wp-json/wp/v2/posts/?author=${params.id}`, {
        auth: {
            username: "admin",
            password: "admin@123",
        },

    })
        .then(res => {
            posts = res.data;
            console.log(posts);
        })
        .catch(error => {
            console.log(error.response)
        });

    return (
        <div className="PostMap">
            <PostMap posts={posts} />
        </div>
    )
}

export default PostCard;