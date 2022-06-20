import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import './fetchPost.css';
import axios from 'axios';

class FetchPost extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            user_id: 0,
            posts: [],
        };

        let fetched = false;

        // this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJiaGF2eWEiLCJpYXQiOjE2NTUyNzc5MDUsImV4cCI6MTgxMjk1NzkwNX0.8PVPMkVNIU1vpCu6pX-XEj6ROPLVCQJU7GjesjPFEAY';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    //   insertData(nonce){
    //     axios.get('http://wp.ruvictor.com/api/user/register/?username='+this.state.username+'&email='+this.state.email+'&nonce=' + nonce + '&display_name='+this.state.display_name+'&insecure=cool')
    //     .then(res => {
    //       ///const data = res.data;
    //       ///console.log(data);
    //     }).catch(error => {
    //       console.log(error.response)
    //   });
    //   }

    //   getWPnonce(){
    //     axios.get('http://wp.ruvictor.com/api/get_nonce/?controller=user&method=register')
    //     .then(res => {
    //       this.insertData(res.data.nonce);
    //       ///console.log(res.data.nonce);
    //     }).catch(error => {
    //       console.log(error.response)
    //   });
    //   }

    handleSubmit(e) {
        e.preventDefault();
        // this.getWPnonce();
        axios.get('http://localhost/network/wp-json/wp/v2/users/me', {
            auth: {
                username: this.state.username,
                password: this.state.password,
            },
        })
            .then(res => {
                console.log("Login Success");
                this.setState({ user_id: res.data.id });
                this.fetched = true;
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="FetchPost">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className='labelForm' htmlFor="exampleInputEmail">Username</label>
                                <input name="username" value={this.state.username} onChange={this.handleChange} type="text" className="form-control" id="exampleInputUsername" placeholder="Enter Username" />
                            </div>
                            <div className="form-group">
                                <label className='labelForm' htmlFor="exampleInputPassword">Password</label>
                                <input name="password" value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword" placeholder="Enter Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Fetch Post</button>
                        </form>
                    </div>
                </div>
                <div>
                    {this.fetched && (<Navigate to={`/fetchpost/${this.state.user_id}`} replace="true" />)}
                </div>
            </div>
        );
    }
}

export default FetchPost;