import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Counter, {CounterApp} from './Counter';
import store from './store';
import { Provider } from 'react-redux';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('testing counter component', () => {
    const component = mount(
        <Provider store={store}>
            <Counter />
        </Provider>
    );

    const incBtnWrp = component.find('#inc');
    const decBtnWrp = component.find('#dec');
    const spanWrp = component.find('span');

   test('test', () => {
        incBtnWrp.simulate('click');
        incBtnWrp.simulate('click');
        incBtnWrp.simulate('click');

        expect(spanWrp.text()).toEqual("3");
   });

});