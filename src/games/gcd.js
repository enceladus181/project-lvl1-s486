import engine from '.';
import { getRandomNumber } from './apiBrGms';

const gcdGame = () => {
	const taskExplanationMessage = 'Find the greatest common divisor of given numbers.';
	const generateGame = () => {
		const getGcdOfTwoNumbers = (a, b) => {
			if (!b) {
				return a;
			}

			return getGcdOfTwoNumbers(b, a % b);
		};
	
		const operand1 = getRandomNumber(0, 21);
		const operand2 = getRandomNumber(0, 21);
		const question = `${operand1} ${operand2}`;
		const rightAnswer = getGcdOfTwoNumbers(operand1, operand2);

		return { question, rightAnswer };
	};
	
	return engine(taskExplanationMessage, { generateGame });
};

export default gcdGame;
