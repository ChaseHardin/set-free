import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('Login', () => {
    it('should render Login component', () => {
        assert.equal(render().length, 1);
    });

    it('should render login banner', () => {
        const banner = render().find('.banner');

        assert.equal(banner.length, 1);
        assert.equal(banner.find('h1').text(), 'SetFree');
    });

    it('should have email input with correct props', () => {
        const email = render().find("[name='email']");
       
        assert.equal(email.length, 1);
        assert.equal(email.prop('type'), 'email');
        assert.equal(email.prop('placeholder'), 'Enter email...');
    });

    it('should have password input with correct props', () => {
        const password = render().find("[name='password']");

        assert.equal(password.length, 1);
        assert.equal(password.prop('type'), 'password');
        assert.equal(password.prop('placeholder'), 'Enter password...');
        assert.equal(password.prop('className'), 'form-control')
    });

    it('should have submit button with correct props', () => {
        const submitButton = render().find("[name='login-button']");

        assert.equal(submitButton.length, 1);
        assert.equal(submitButton.prop('type'), 'submit');
        assert.equal(submitButton.prop('className'), 'btn btn-success btn-lg btn-block');
        assert.equal(submitButton.text(), 'Login');
    });

    function render() {
        const store = {
            user: {
                name: 'users name'
            }
        };

        return mount(<Login store={store}/>);
    }
});
