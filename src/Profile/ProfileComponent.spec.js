import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfileComponent from './ProfileComponent';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('ProfileComponent', () => {
    it('shoulad render profile message', () => {
        var component = mount(<ProfileComponent />);

        assert.equal(component.find('.profile-title').text(), 'Profile Page');
    });
});
