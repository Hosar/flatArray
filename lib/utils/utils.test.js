import { flatArray } from './index';
import { expect } from 'chai';

describe('Utils - Flat Array', () => {
    it('should return empty array when no data is provided', () => {
        const arrExpected = [];
        let arrActual = flatArray();
        expect(arrExpected).to.deep.equal(arrActual);
    });
    it('should throw an exception when data is invalid', () => {
        const arr = 'abc';
        let arrActual = function () { flatArray(arr) };
        expect(arrActual).to.throw('Please provide an array value');
    });

    it('should return empty array when empty array is passed', () => {
        const arr = [];
        const arrExpected = [];
        const arrActual = flatArray(arr);
        expect(arrExpected).to.deep.equal(arrActual);
    });

    it('should flat an array with 1 deep level inner array', () => {
        const arr = [1, 2, 3, [4, 5, 6]];
        const arrExpected = [1, 2, 3, 4, 5, 6];
        const arrActual = flatArray(arr);
        expect(arrExpected).to.deep.equal(arrActual);
    });

    it('should flat an array with 2 deep level inner array', () => {
        const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
        const arrExpected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const arrActual = flatArray(arr);
        expect(arrExpected).to.deep.equal(arrActual);
    });

    it('should flat an array with 3 deep level inner array', () => {
        const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];
        const arrExpected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const arrActual = flatArray(arr);
        expect(arrExpected).to.deep.equal(arrActual);
    });
    it('should flat an array with several nested arrays', () => {
        const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]], [13, 14, 15, [16, 17, 18], [19, 20, [21, [22]]]]]];
        const arrExpected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
        const arrActual = flatArray(arr);
        expect(arrExpected).to.deep.equal(arrActual);
    });
});