import React from 'react';
import firebase from '../../FireBaseConfig';

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
            <div className='login-container col-md-6'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='emailInput'>Email Address</label>
                        <input id='emailInput'
                            className='form-control'
                            name='email'
                            type='email'
                            placeholder='Enter email address'
                            onChange={this.handleChange}
                        />
                        <input id='passwordInput'
                            name='password'
                            type='password'
                            placeholder='Enter password...'
                            onChange={this.handleChange}
                        />
                        <button name='login-button'
                            type='submit'
                            className='btn btn-success'
                            onClick={this.login}>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;