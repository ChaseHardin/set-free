import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HeaderNavbar from './HeaderNavbar';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('HeaderNavbar', () => {
    it('should render Navbar app name', () => {
        var component = mount(<HeaderNavbar />);

        assert.equal(component.find('.navbar-title').text(), 'SetFree');
    });
});
