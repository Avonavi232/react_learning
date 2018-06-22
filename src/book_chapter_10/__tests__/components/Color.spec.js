import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import {compose} from 'redux';

import Color from '../../components/ui/Color';


describe('<Color/> Component UI', function () {
    const shallowExpect = compose(expect, toJSON, shallow);

    it('should render correct properties', function () {
        shallowExpect(
            <Color
                title="Test Color"
                color="#ffffff"
                rating={3}
                timestamp={new Date().toDateString()}
            />
        ).toMatchSnapshot();
    });
});