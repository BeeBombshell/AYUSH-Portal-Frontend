import React, { createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
    state = {
        isLoggedIn: false,
        username: '',
        password: '',
        user_id: 0,
    };


    componentDidMount() {

        this.login = (username, password, user_id) => {
            this.setState({
                isLoggedIn: true,
                username: username,
                password: password,
                user_id: user_id,
            })
        }

        this.logout = () => {
            this.setState({
                isLoggedIn: false,
                username: '',
                password: '',
                user_id: 0,
            })
        }
    }

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, login: this.login, logout: this.logout }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider;