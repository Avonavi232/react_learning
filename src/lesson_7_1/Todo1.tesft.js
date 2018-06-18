import React from 'react';
import Todo from './Todo';
import ReactTestUtils from 'react-dom/test-utils';
import ReactTestRenderer from 'react-test-renderer/shallow';

describe('Todo component tests', ()=>{
    const component = ReactTestUtils.renderIntoDocument(<Todo/>);


    test('Todo component must have form tags', () => {
        ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form');
    });

    test('Todo component must have to children in form', () => {
        const form = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form');
        expect(form.childElementCount).toBe(2);
    });
});


describe('Alternative todo component testing', ()=>{
    test('Init don`t have text', () => {
        const component = new ReactTestRenderer();
        component.render(<Todo/>);
        const result = component.getRenderOutput();
        const divUnderForm = result.props.children[1];
        const h6Tag = divUnderForm.props.children;

        expect(h6Tag.props.children).toBe('You don\'t have todos yet...');
    });
});