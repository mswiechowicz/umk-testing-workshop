export const sumOfNumbers = numbers => {
	if (!numbers || !numbers.length) {
		return 0;
	}
	return numbers.reduce((a, b) => a + b, 0);
};
