import { greetings, greetingsRandom } from './greetings';
import { config } from '../../utils/config';
import { random } from '../../utils/random';

describe('greetings', () => {
	test('should return correct greeting for given name', () => {
		// setup
		const originalConfig = config.lang;
		config.lang = 'en';

		// when
		const result = greetings('Joe');

		// then
		expect(result).toEqual('Hello Joe!');

		// cleanup
		config.lang = originalConfig;
	});
});

describe('greetings random', () => {
	test('should return greetings when name is not given', () => {
		//given
		const originalRandom = random.getRandomListElement;
		random.getRandomListElement = jest.fn(() => 'Hi');

		//when
		const result = greetingsRandom();

		//then
		expect(result).toEqual('Hi nameless');

		//cleanup
		random.getRandomListElement = originalRandom;
	});
});
