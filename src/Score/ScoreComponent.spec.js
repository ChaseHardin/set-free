import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScoreComponent from './ScoreComponent';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('ScoreComponent', () => {
    it('should render score title', () => {
        var component = mount(<ScoreComponent />);

        assert.equal(component.find('.score-title').text(), 'Score Page');
    });
});
