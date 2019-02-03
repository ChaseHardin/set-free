import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Score from './Score';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('Score', () => {
    it('should render score title', () => {
        var component = mount(<Score />);

        assert.equal(component.find('.score-title').text(), 'Score Page');
    });
});
