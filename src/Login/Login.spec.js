import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('LoginComponent', () => {
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

    it('should update state when email is entered', () => {
        const component = mount(<Login />);
        
        assert.equal(component.state().email, '', 'PRE-CHECK: email should be set to empty');

        const email = component.find("[name='email']");

        email.simulate('change', {target: {value: 'email@email.com'}});
        component.update();
        
        assert(component.state().email, 'email@email.com');
    });

    it('should have password input with correct props', () => {
        const component = mount(<Login />);
        const password = component.find("[name='password']");

        assert.equal(password.length, 1);
        assert.equal(password.prop('type'), 'password');
        assert.equal(password.prop('placeholder'), 'Enter password');
        assert.equal(password.prop('id'), 'passwordInput');
    });

    it('should update state when password is entered', () => {
        const component = mount(<Login />);

        assert.equal(component.state().password, '', 'PRE-CHECK: password should be set to empty');

        const password = component.find("[name='password']");
        password.simulate('change', {target: {value: 'myPass'}});
        component.update();

        assert(component.state().password, 'myPass')
    });

    it('should render the login button', () => {
        const component = mount(<Login />);
        const button = component.find("[name='loginButton']");

        assert.equal(button.length, 1);
        assert.equal(button.prop('className'), 'btn btn-primary');
    });

    it('should render the signup button', () => {
        const component = mount(<Login />);
        const button = component.find("[name='signupButton']");

        assert.equal(button.length, 1);
        assert.equal(button.prop('className'), 'btn btn-success');
    });
});
