import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BottomNavbarComponent from './BottomNavbarComponent';
import { BrowserRouter } from 'react-router-dom';

var assert = require('assert');

configure({ adapter: new Adapter() });
describe('BottomNavBarComponent', () => {
    it('should render bottom nav', () => {
        var component = mount(
            <BrowserRouter>
                <BottomNavbarComponent />
            </BrowserRouter>
        );

        assert.equal(component.find('nav').length, 1);
    });
});