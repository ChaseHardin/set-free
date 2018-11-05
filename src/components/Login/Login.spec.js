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

    it('should update state when email is entered', () => {
        const component = mount(<Login />);
        
        assert.equal(component.state().email, '', 'PRE-CHECK: email should be set to empty');

        const email = component.find("[name='email']");

        email.simulate('change', {target: {value: 'email@email.com'}});
        component.update();
        
        assert(component.state().email, 'email@email.com');
    });
});
