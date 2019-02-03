import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BottomNavbar from './BottomNavbar';
import { BrowserRouter } from 'react-router-dom';

var assert = require('assert');

configure({ adapter: new Adapter() });
describe('BottomNavBar', () => {
    it('should render bottom nav', () => {
        var component = mount(
            <BrowserRouter>
                <BottomNavbar />
            </BrowserRouter>
        );

        assert.equal(component.find('nav').length, 1);
    });
});