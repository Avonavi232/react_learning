import C from '../../constants';
import {color} from "../../store/fakereducers";
import deepFreeze from 'deep-freeze';

describe("color Reducer", () => {
    test("ADD_COLOR success", () => {
        const state = {};
        const timestamp = +new Date;
        const action = {
            type: C.ADD_COLOR,
            id: 0,
            title: 'new Color',
            color: '#123123',
            timestamp
        };

        deepFreeze(state);
        deepFreeze(action);

        const result = color(state, action);
        expect(result).toEqual({
            id: 0,
            title: 'new Color',
            color: '#123123',
            timestamp,
            rating: 0
        })

    });

    it("RATE_COLOR success", () => {
        const state = {
            id: 0,
            title: 'testColor',
            color: '#123123',
            timestamp: '123',
            rating: undefined
        };

        const action = {
            type: C.RATE_COLOR,
            id: 0,
            rating: 3
        };

        deepFreeze(state);
        deepFreeze(action);

        const result = color(state, action);

        expect(result).toEqual({
            id: 0,
            title: 'testColor',
            color: '#123123',
            timestamp: '123',
            rating: 3
        })
    });
});