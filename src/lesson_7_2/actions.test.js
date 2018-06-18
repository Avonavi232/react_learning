import React from 'react';
import {increment, decrement} from "./actions";

test('increment action test', () => {
    const expected = { type: 'INC' };
    expect(increment()).toEqual(expected);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
            console.log(123);
        }, 1000);
    })
});