import {divide, add} from './calculus';

describe('add', () => {
    test('1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('throws error on 1.7 + 1.4', () => {
        expect(() => {
            add(1.7, 1.4);
        }).toThrowError('Floats');
    });

    test('1 - 2 to equal -1', () => {
        expect(add(1, -2)).toBe(-1);
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