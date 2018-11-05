import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from './Profile';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('Profile', () => {
    it('shoulad render profile message', () => {
        var component = mount(<Profile />);

        assert.equal(component.find('.profile-title').text(), 'Profile Page');
    });
});
