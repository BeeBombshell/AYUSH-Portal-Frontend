import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostMap from "./PostMap";
import './fetchPost.css';
import { useState, useEffect} from "react";

const PostCard = (props) => {
    let params = useParams();
    // let posts = [];
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost/network/wp-json/wp/v2/posts/?author=${params.id}`, {
            auth: {
                username: "admin",
                password: "admin@123",
            },

        })
            .then(res => {
                setPosts(res.data);
            })
            .catch(error => {
                console.log(error.response)
            });
    }, []);

    return (
        <div className="PostMap">
            <PostMap posts={posts} />
        </div>
    )
}

export default PostCard;