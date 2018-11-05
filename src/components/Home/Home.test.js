import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('Home', () => {
    it('shoulad render homepage message', () => {
        var component = mount(<Home />);

        assert.equal(component.find('.home-title').text(), 'Home Page');
    });
});
