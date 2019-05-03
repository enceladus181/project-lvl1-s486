import engine from '.';
import { getRandomNumber } from './apiBrGms';

const gcdGame = () => {
	const taskExplanationMessage = 'Find the greatest common divisor of given numbers.';
	const generateGcdGame = () => {
		const getGcdOfTwoNumbers = (a, b) => {
			if (!b) {
				return a;
			}
			return getGcdOfTwoNumbers(b, a % b);
		};
	
		const operand1 = getRandomNumber();
		const operand2 = getRandomNumber();
		const question = `${operand1} ${operand2}`;
		const rightAnswer = getGcdOfTwoNumbers(operand1, operand2);
		return { question, rightAnswer };
	};
	
	engine(taskExplanationMessage, generateGcdGame);
};

export default gcdGame();
