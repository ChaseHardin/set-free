import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
                <div className='col-md-6 offset-md-3'>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='emailInput'>Email Address</label>
                            <input id='emailInput'
                                className='form-control'
                                name='email'
                                type='email'
                                placeholder='Enter email address'
                                onChange={this.handleEmailChange}
                            />

                            <label htmlFor='passwordInput'>Password</label>
                            <input id='passwordInput'
                                className='form-control'
                                name='password'
                                placeholder='Enter password'
                                type='password'
                                onChange={this.handlePasswordChange}
                            />

                            <button name='loginButton' className='btn btn-primary'>Login</button>
                            <button name='signupButton' className='btn btn-success'>Signup</button>
                        </div>
                    </form>
                </div>
        );
    }
}

export default Login;