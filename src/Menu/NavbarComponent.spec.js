import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavbarComponent from './NavbarComponent';
import { BrowserRouter } from 'react-router-dom';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('NavbarComponent', () => {
    it('should render Navbar app name', () => {
        var component = mount(
            <BrowserRouter>
                <NavbarComponent />
            </BrowserRouter>
        );

        assert.equal(component.find('.navbar-title').text(), 'SetFree');
    });
});
