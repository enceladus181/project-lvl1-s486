import engine from './engine';
import { getRandomNumber } from './apiBrGms';

const gcd = () => {
	const numOfTries = 3;
	const taskExplanationMessage = 'Find the greatest common divisor of given numbers.';
	const getGcdOfTwoNumbers = (a, b) => {
		if (!b) {
			return a;
		}
		return getGcdOfTwoNumbers(b, a % b);
	};
	for (let i = 1; i <= numOfTries; i += 1) {
		const operand1 = getRandomNumber();
		const operand2 = getRandomNumber();
		const	question = `${operand1} ${operand2}`;
		const rightAnswer = getGcdOfTwoNumbers(operand1, operand2);
		engine(taskExplanationMessage, question, rightAnswer, i);
	}
};

export default gcd;
