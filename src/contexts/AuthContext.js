import React, { createContext } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
    
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    state = {
        isLoggedIn: false,
        username: this.props.cookies.get('username') || '',
        password: this.props.cookies.get('password') || '',
        user_id: this.props.cookies.get('user_id') || '',
    };


    login = (username, password, user_id) => {
        this.setState({
            isLoggedIn: true,
            username: username,
            password: password,
            user_id: user_id,
        })
    }

    logout = () => {
        this.setState({
            isLoggedIn: false,
            username: '',
            password: '',
            user_id: 0,
        })
    }

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, login: this.login, logout: this.logout }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default withCookies(AuthContextProvider);