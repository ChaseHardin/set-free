import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmailPasswordForm from './EmailPasswordForm';

var assert = require('assert');
configure({ adapter: new Adapter() });

describe('EmailPasswordForm', () => {
    let component;
    let props;

    beforeEach(() => {
        props = {
            handleChange: () => {},
            handleSubmit: () => {},
            buttonText: 'button text'
        }

        component = mount(<EmailPasswordForm {...props} />);
    });

    it('should render', () => {
        assert.equal(component.length, 1);
    });

    it('should render a form', () => {
        const form = component.find('form');

        assert.equal(form.length, 1);
    });

    it('should render email input with props', () => {
        const email = component.find("[type='email']");
        
        assert.equal(email.length, 1);
        assert.equal(email.prop('className'), 'form-control');
        assert.equal(email.prop('placeholder'), 'Enter email...');
        assert.equal(email.prop('onChange'), props.handleChange)
    });

    it('should render password input with props', () => {
        const password = component.find("[type='password']");

        assert.equal(password.length, 1);
        assert.equal(password.prop('className'), 'form-control');
        assert.equal(password.prop('placeholder'), 'Enter password...');
        assert.equal(password.prop('onChange'), props.handleChange);
    });

    it('should render submit button with props', () => {
        const button = component.find("[type='submit']");

        assert.equal(button.length, 1);
        assert.equal(button.prop('className'), 'btn btn-success btn-lg btn-block');
        assert.equal(button.prop('onClick'), props.handleSubmit);
        assert.equal(button.text(), 'button text')
    });
});