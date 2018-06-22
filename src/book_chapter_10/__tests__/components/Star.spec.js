import React from 'react';
import {shallow} from 'enzyme';
import Star from '../../components/ui/Star';

describe('<Star/> Component', function () {
    it('Renders default star (without any props passed', () => {
        const wrapper = shallow(<Star/>);
        expect(wrapper.find('div.star').length).toBe(1);
    });

    it("renders selected stars", () =>
        expect(
            shallow(<Star selected={true}/>)
                .find('div.selected.star')
                .length
        ).toBe(1)
    );

    it("invokes onClick", () => {
        const _click = jest.fn();

        shallow(<Star onClick={_click}/>).find('div.star').simulate('click');

        expect(_click).toBeCalled();
    });
});