import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import './fetchPost.css';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';

class FetchPost extends Component {

    constructor() {
        super();
        this.state = {
            user_id: 0,
        }

        let fetched = false;
    }

    
    render() {
        return (
            <AuthContext.Consumer>
                {(context) => {
                    const { isLoggedIn, username, password, user_id, login, logout } = context;
                    return (
                        <div>
                            <div className="container">
                                <div className="FetchPost">
                                    <button type="button" className="btn btn-dark" onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ user_id: user_id });
                                        this.fetched = true;
                                    }}> Fetch Posts</button>
                                </div>
                            </div>
                            <div>
                                {this.fetched && (<Navigate to={`/fetchpost/${this.state.user_id}`} replace="true" />)}
                            </div>
                        </div>
                    )
                }}
            </AuthContext.Consumer>
        );
    }
}

export default FetchPost;