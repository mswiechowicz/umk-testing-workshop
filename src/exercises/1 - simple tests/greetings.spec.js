import { greetings } from './greetings';

describe('Greetings Tests', function () {
	it("should return 'Cześć nameless' when we do not pass any argument", function () {
		// when
		const result = greetings();

		// then
		expect(result).toBe('Cześć nameless');
	});

	it("should return 'Cześć *!' when we pass only name", function () {
		// given
		const name = 'Stachu';

		// when
		const result = greetings(name);

		// then
		expect(result).toBe(`Cześć ${name}!`);
	});

	it("should return 'Hello *!' when we pass name and lang other than 'pl'", function () {
		// given
		const name = 'Stachu';
		const lang = 'en';

		// when
		const result = greetings(name, lang);

		// then
		expect(result).toBe(`Hello ${name}!`);
	});
});
