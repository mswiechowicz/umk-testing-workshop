import { greetings, greetingsRandom } from './greetings';

jest.mock('../../utils/config', () => ({
	config: { lang: 'en' },
}));

jest.mock('../../utils/random', () => ({
	random: {
		getRandomListElement: jest.fn(() => 'Siemano'),
	},
}));

describe('greetings', () => {
	test('should return correct greeting for given name', () => {
		// when
		const result = greetings('Joe');

		// then
		expect(result).toEqual('Hello Joe!');
	});
});

describe('greetingsRandom', () => {
	test('should return correct greeting for given name', () => {
		// when
		const result = greetingsRandom('Joe');

		// then
		expect(result).toEqual('Siemano Joe!');
	});
});
