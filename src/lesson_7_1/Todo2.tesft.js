import React from 'react';
import Todo from './Todo';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Todo testing with Enzyme', () => {
    const component = shallow(<Todo/>);
    const h6 = component.find('h6');

    test('Should be h6 tag on init app', () => {
        expect(h6).toHaveLength(1)
    });
    test('Should be h6 tag on init app', () => {
        expect(h6.text()).toBe('You don\'t have todos yet...');
    });

    test('addTodo method test', () => {
        component.instance().addTodo('some todo');
        component.instance().addTodo('some todo');

        expect(component.state().todos).toHaveLength(2);
    })
});


describe('Full render testing', () => {
    const component = mount(<Todo />);
    test('todo form must have addTodo prop', () => {
        expect(component.childAt(0).childAt(0).props().addTodo).toBeDefined();
    });

    // test('addTodo method calls re-render', () => {
    //     component.instance().addTodo('todo1');
    //     component.instance().addTodo('todo2');
    //     component.instance().addTodo('todo3');
    //
    //     setTimeout(() => {
    //         // expect(component.childAt(0).childAt(1).children().type()).toBe('div');
    //         // console.log(component.find('ul').get(0));
    //         // expect(component.find('ul').get(0).childElementCount).toEqual(3);
    //     }, 20)
    // });

});


test('addTodo method interactive', () => {
    const component = mount(<Todo />);

    component.find('input').instance().value = 'hello';
    component.find('form').simulate('submit');

    console.log(component.state());
});