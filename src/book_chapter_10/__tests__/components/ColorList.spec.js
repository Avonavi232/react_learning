import React from 'react';
import {mount, shallow} from 'enzyme';

import ColorList from '../../components/ui/ColorList';

jest.mock('../../components/ui/Color', () => {
    return ({rating, onRate=f=>f, onRemove=f=>f}) =>
        <div className="mock-color">
            <button className="rate" onClick={() => onRate(rating)}></button>
            <button className="remove" onClick={onRemove}></button>
        </div>
});

describe('<ColorList/> UI Component', function () {
    describe('Rating a Color', function () {
        let _rate = jest.fn();
        let wrapper;

        beforeAll(() => {
            wrapper = mount(<ColorList colors={_testColors} onRate={_rate}/>);
            wrapper.find('button.rate')
                .first()
                .simulate('click');
        });

        it('should invoke onRate handler', function () {
            expect(_rate).toBeCalled();
        });

        it('should rate the correct color', function () {
            expect(_rate).toBeCalledWith("8658c1d0-9eda-4a90-95e1-8001e8eb6036", 4);
        });
    });


    describe('Rating a Color', function () {
        let _remove = jest.fn();
        let wrapper;

        beforeAll(() => {
            wrapper = mount(<ColorList colors={_testColors} onRemove={_remove}/>);
            wrapper.find('button.remove')
                .last()
                .simulate('click');
        });

        it('should invoke onRemove handler', function () {
            expect(_remove).toBeCalled();
        });

        it('should rate the correct color', function () {
            expect(_remove).toBeCalledWith("58d9caee-6ea6-4d7b-9984-65b145031979");
        });
    });

    describe('Rendering UI', function () {
        it('should be correctly rendered without props', function () {
            expect(shallow(<ColorList/>).find('p').text()).toBe("No Colors Listed. (Add a Color)");
        });

        it('clicking default remove button does not cause Error', function () {
            mount(<ColorList colors={_testColors}/>)
                .find('button.remove')
                .first()
                .simulate('click')
        });

        it('clicking default rate button does not cause Error', function () {
            mount(<ColorList colors={_testColors}/>)
                .find('button.rate')
                .first()
                .simulate('click')
        });
    });
});

