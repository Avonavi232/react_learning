import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import {Colors} from "../../components/containers";

jest.mock('../../components/ui/ColorList');

describe('<Colors/> Container', function () {
    let wrapper;

    const _store = {
        dispatch: jest.fn(),
        subscribe: jest.fn(),
        getState: jest.fn(() => ({
            sort: "SORTED_BY_DATE",
            colors: _testColors
        }))
    };

    beforeAll(() => {
        wrapper = mount(
            <Provider store={_store}>
                <Colors/>
            </Provider>
        )
    });

    afterEach(() => jest.resetAllMocks());


    it('should render three colors', function () {
        expect(wrapper.find('ColorListMock').props().colors.length).toBe(3);
    });

    it("sorts the colors by date", () => {
        expect(wrapper.find('ColorListMock').props().colors[0].title).toBe("tomato")
    });

    it("dispatches a REMOVE_COLOR action", () => {
        wrapper.find('ColorListMock')
            .props()
            .onRemove('f9005b4e-975e-433d-a646-79df172e1dbb');
        expect(_store.dispatch.mock.calls[0][0])
            .toEqual({
                id: 'f9005b4e-975e-433d-a646-79df172e1dbb',
                type: 'REMOVE_COLOR'
            })
    })

    it("dispatches a RATE_COLOR action", () => {
        wrapper.find('ColorListMock')
            .props()
            .onRate('azaza', 5);

        expect(_store.dispatch.mock.calls[0][0])
            .toEqual({
                id: 'azaza',
                rating: 5,
                type: 'RATE_COLOR'
            })
    })

});