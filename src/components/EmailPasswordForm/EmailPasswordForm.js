import React from 'react';

const EmailPasswordForm = (props) => {
    return (
        <form>
            <div className='form-group'>
                <label>Email</label>
                <input type='email'
                    className='form-control'
                    placeholder='Enter email...'
                    onChange={props.handleChange} />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password'
                    className='form-control'
                    placeholder='Enter password...'
                    onChange={props.handleChange} />
            </div>
            <button type='submit'
                className='btn btn-success btn-lg btn-block'
                onClick={props.handleSubmit}>{props.buttonText}</button>
        </form>
    );
}

export default EmailPasswordForm;