import engine from '.';
import { getRandomNumber } from './apiBrGms';

const gcd = () => {
	const taskExplanationMessage = 'Find the greatest common divisor of given numbers.';
	const getGcdOfTwoNumbers = (a, b) => {
		if (!b) {
			return a;
		}
		return getGcdOfTwoNumbers(b, a % b);
	};
	const operand1 = getRandomNumber();
	const operand2 = getRandomNumber();
	const	question = () => `${operand1} ${operand2}`;
	const rightAnswer = () => getGcdOfTwoNumbers(operand1, operand2);
	engine(taskExplanationMessage, question, rightAnswer);
};

export default gcd;
