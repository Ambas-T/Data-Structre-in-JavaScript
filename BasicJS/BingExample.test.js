const { bingExample, ValidationError, NetworkError } = require('./BingExample');

describe('bingExample function', () => {
    // ... other test cases ...

    test('returns correct result for valid query', () => {
        const query = 'hello';
        const expectedResult = 'Result for hello';
        expect(bingExample(query)).toBe(expectedResult);
    });
});

describe('bingExample', () => {
    test('should throw ValidationError for non-string query', () => {
        expect(() => bingExample(123)).toThrow(ValidationError);
    });

    test('should throw NetworkError for "networkError" query', () => {
        expect(() => bingExample('networkError')).toThrow(NetworkError);
    });

    test('should throw Error for empty query', () => {
        expect(() => bingExample('')).toThrow(Error);
    });

    test('should return correct result for valid query', () => {
        expect(bingExample('hello')).toBe('Result for hello');
    });
});


