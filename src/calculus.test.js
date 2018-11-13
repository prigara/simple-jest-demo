import {divide, sum} from './calculus';

describe('sum', () => {
    test('1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('throws error on 1.7 and 1.4', () => {
        expect(() => {
            sum(1.7, 1.4);
        }).toThrowError('Floats');
    });

    test('1 - 2 to equal -1', () => {
        expect(sum(1, -2)).toBe(-1);
    });
});

describe('divide', () => {
    test('7 / 6 to equal 1.17', () => {
        expect(divide(7, 6)).toEqual(1.17)
    });

    test('throws error on division by zero', () => {
        expect(() => {
            divide(2, 0);
        }).toThrow();
    });
});