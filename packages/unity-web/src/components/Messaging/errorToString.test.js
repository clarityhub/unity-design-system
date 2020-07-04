import errorToString from './errorToString';

describe('erroToString', () => {
	it('says Something bad happend for generic error', () => {
		const given = new Error();
		const expected = 'Something bad happened';

		expect(errorToString(given)).toBe(expected);
	});

	it('says the error message for an error with a string message', () => {
		const given = new Error('oh no');
		const expected = 'oh no';

		expect(errorToString(given)).toBe(expected);
	});
    
	it('says the error message for an error with an error object message', () => {
		const given = {
			message: 'oh no',
		};
		const expected = 'oh no';

		expect(errorToString(given)).toBe(expected);
	});

	it('says Something bad happend for an error with a malformed error object message', () => {
		const given = {};
		const expected = 'Something bad happened';

		expect(errorToString(given)).toBe(expected);
	});
});