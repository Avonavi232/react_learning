import React from 'react';
import {mount} from 'enzyme';

import Expandable from '../../components/HOC/Expandable';

describe('Expandable HOC Component', function () {
    let
        props,
        wrapper,
        ComposedComponent,
        MockComponent = ({collapsed, expandCollapse}) =>
            <div onClick={expandCollapse}>
                {collapsed ? 'collapsed' : 'expanded'}
            </div>;

    describe('Rendering UI', function () {
        beforeAll(() => {
            ComposedComponent = Expandable(MockComponent);
            wrapper = mount(<ComposedComponent foo="foo" bar="bar" />);
            props = wrapper.find(MockComponent).props();
        });

        it('starts off collapsed', function () {
           expect(props.collapsed).toBe(true);
        });

        it('should pass the expandCollapse fn to composed component', function () {
            expect(typeof props.expandCollapse).toBe('function');
        });

        it("passes additional foo prop to composed component", () =>
            expect(props.foo).toBe("foo")
        );

        it("passes additional foo prop to composed component", () =>
            expect(props.bar).toBe("bar")
        );
    });

    describe('Expand Collapse Functionality', function () {
        let instance;
        beforeAll(() => {
            ComposedComponent = Expandable(MockComponent);
            wrapper = mount(<ComposedComponent collapsed={false}/>);
            instance = wrapper.instance();
        });

        it("renders the MockComponent as the root element", () => {
            expect(wrapper.first().is(MockComponent));
        });

        it("starts off expanded", () => {
            expect(instance.state.collapsed).toBe(false)
        });

        it("toggles the collapsed state", () => {
            instance.expandCollapse();
            expect(instance.state.collapsed).toBe(true)
        })
    });
});