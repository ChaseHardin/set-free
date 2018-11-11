import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('Login', () => {
    it('shoulad render Login component', () => {
        const component = mount(<Login />);

        assert.equal(component.length, 1);
    });

    it('should have email input with correct props', () => {
        const component = mount(<Login />);
        const email = component.find("[name='email']");
       
        assert.equal(email.length, 1);
        assert.equal(email.prop('type'), 'email');
        assert.equal(email.prop('placeholder'), 'Enter email address');
    });

    it('should have password input with correct props', () => {
        const component = mount(<Login />);
        const password = component.find("[name='password']");

        assert.equal(password.length, 1);
        assert.equal(password.prop('type'), 'password');
        assert.equal(password.prop('placeholder'), 'Enter password...');
    });

    it('should have submit button with correct props', () => {
        const component = mount(<Login />);
        const submitButton = component.find("[name='login-button']");

        assert.equal(submitButton.length, 1);
        assert.equal(submitButton.prop('type'), 'submit');
        assert.equal(submitButton.prop('className'), 'btn btn-success');
        assert.equal(submitButton.text(), 'Login');
    });
});
