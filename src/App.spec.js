import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Login from './Login/Login';

let assert = require('assert');

configure({ adapter: new Adapter() });

describe('App Component', () => {
    it('should render app component', () => {
        const component = mount(<App />);

        assert.equal(component.find('App').length, 1);
    });

    it('should render the login component', () => {
        const component = mount(<App />);
        const loginComponent = component.find(Login);

        assert.equal(loginComponent.length, 1);
    });
})