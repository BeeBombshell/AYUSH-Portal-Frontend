import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import './logout.css';
import { AuthContext } from '../../contexts/AuthContext';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class Logout extends Component {

    constructor() {
        super();
        let loggedOut = false;
    }

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }


    render() {
        return (
            <AuthContext.Consumer>
                {(context) => {
                    const { isLoggedIn, username, password, user_id, login, logout } = context;
                    return (
                        <div>
                            <div className="container">
                                <div className="Logout">
                                    <button type="button" className="btn btn-dark" onClick={(e) => {
                                        e.preventDefault();
                                        const { cookies } = this.props;
                                        cookies.remove('username');
                                        cookies.remove('password');
                                        cookies.remove('user_id');
                                        this.loggedOut = true;
                                    }}> Log Out </button>
                                </div>
                            </div>
                            <div>
                                {this.loggedOut && (<Navigate to={`/login`} replace="true" />)}
                            </div>
                        </div>
                    )
                }}
            </AuthContext.Consumer>
        );
    }
}

export default withCookies(Logout);