import React from "react";

const PostCard = (props) => {
    const PostList = props.posts.map((post) => {
        return (
            <div key = {post.id} className="PostCard">
                <div className="card">
                    <div className="card-header">
                        <h5>Author : {props.author}</h5>
                    </div>
                    <div className="card-body">
                    <h3 className="card-title">{post.title.rendered}</h3>
                        <div className="card-text">{ post.content.rendered }</div>
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