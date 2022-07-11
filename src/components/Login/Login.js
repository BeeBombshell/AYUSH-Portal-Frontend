import React, { Component } from 'react';
import './login.css';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };

        let loggedIn = false;

        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJiaGF2eWEiLCJpYXQiOjE2NTUyNzc5MDUsImV4cCI6MTgxMjk1NzkwNX0.8PVPMkVNIU1vpCu6pX-XEj6ROPLVCQJU7GjesjPFEAY';
        this.handleChange = this.handleChange.bind(this);
    }

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
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

    render() {
        return (
            <AuthContext.Consumer>
                {(context) => {
                    const { isLoggedIn, username, password, user_id, login, logout } = context;

                    return (
                        <div className="container">
                            <div className="Login">
                                <form onSubmit={
                                    (e) => {
                                        {
                                            e.preventDefault();
                                            // this.getWPnonce();
                                            axios.get('http://localhost/network/wp-json/wp/v2/users/me', {
                                                auth: {
                                                    username: this.state.username,
                                                    password: this.state.password,
                                                },
                                                headers: {
                                                    // 'Authorization': `Bearer ${this.token}`,
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json',
                                                    "Access-Control-Allow-Headers": "*",
                                                    "Access-Control-Allow-Origin": "*",
                                                    // "Access-Control-Allow-Methods": "*"
                                                }
                                            })
                                                .then(res => {
                                                    console.log("Login Success");
                                                    this.loggedIn = true;
                                                    // login(this.state.username, this.state.password, res.data.id);
                                                    const { cookies } = this.props;
                                                    cookies.set('username', this.state.username, { path: '/' });
                                                    cookies.set('password', this.state.password, { path: '/' });
                                                    cookies.set('user_id', res.data.id, { path: '/' });
                                                    login(cookies.get('username'), cookies.get('password'), cookies.get('user_id'));
                                                    console.log(username, password, user_id);
                                                }).catch(error => {
                                                    console.log(error.response)
                                                });
                                        }
                                    }
                                }>
                                    <div className="form-group">
                                        <label className='labelForm' htmlFor="exampleInputEmail">Username</label>
                                        <input name="username" value={this.state.username} onChange={this.handleChange} type="text" className="form-control" id="exampleInputUsername" placeholder="Enter Username" />
                                    </div>
                                    <div className="form-group">
                                        <label className='labelForm' htmlFor="exampleInputPassword">Password</label>
                                        <input name="password" value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword" placeholder="Enter Password" />
                                    </div>
                                    <button type="submit" className="btn btn-dark">Login</button>
                                </form>
                            </div>
                            <div>
                                {this.loggedIn && (<Navigate to="/fetchpost/" replace="true" />)}
                            </div>
                        </div>
                    )
                }}
            </AuthContext.Consumer>
        );
    }
}

export default withCookies(Login);