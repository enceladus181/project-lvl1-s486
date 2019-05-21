import engine from '..';
import { getRandomNumber } from '../utils';

const taskExplanationMessage = 'Find the greatest common divisor of given numbers.';
const getGcdOfTwoNumbers = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcdOfTwoNumbers(b, a % b);
};

const generateGame = () => {
  const operand1 = getRandomNumber(0, 21);
  const operand2 = getRandomNumber(0, 21);
  const question = `${operand1} ${operand2}`;
  const rightAnswer = getGcdOfTwoNumbers(operand1, operand2).toString(10);

  return { question, rightAnswer };
};

const gcdGame = () => (
  engine(taskExplanationMessage, generateGame));

export default gcdGame;
