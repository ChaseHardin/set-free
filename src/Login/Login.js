import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    render() {
        return (
            <div className='col-md-6'>
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
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;