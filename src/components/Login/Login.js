import React from 'react';
import firebase from '../../FireBaseConfig';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    login(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className='login-container col-md-6  col-lg-4 offset-lg-4 offset-md-3'>
                <nav className='navbar fixed-top banner'>
                    <h1>SetFree</h1>
                </nav>
                <form className='login-form'>
                    <div className='form-group'>
                        <label htmlFor='emailInput'>Email</label>
                        <input id='emailInput'
                            className='form-control'
                            name='email'
                            type='email'
                            placeholder='Enter email...'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input id='passwordInput'
                            name='password'
                            className='form-control'
                            type='password'
                            placeholder='Enter password...'
                            onChange={this.handleChange}
                        />
                    </div>
                    <button name='login-button'
                        type='submit'
                        className='btn btn-success btn-lg btn-block'
                        onClick={this.login}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;