import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomeComponent from './HomeComponent';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('HomeComponent', () => {
    it('should render homepage message', () => {
        var component = mount(<HomeComponent />);

        assert.equal(component.find('.home-title').text(), 'Home Page');
    });
});
