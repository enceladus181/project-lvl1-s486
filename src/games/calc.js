import engine from '..';
import getRandomNumber from '../utils';

const taskExplanationMessage = 'What is the result of the expression?';
// const getRandomOperator = arr => Math.floor(Math.random() * arr.length);
const operators = ['-', '+', '*'];

const generateGame = () => {
  const operand1 = getRandomNumber(0, 21);
  const operand2 = getRandomNumber(0, 21);
  const operator = getRandomNumber(0, 3);
  let result;
  if (operator === 0) {
    result = operand1 - operand2;
  } else if (operator === 1) {
    result = operand1 + operand2;
  } else {
    result = operand1 * operand2;
  }
  const rightAnswer = result.toString(10);
  const question = `${operand1} ${operators[operator]} ${operand2}`;
  return { question, rightAnswer };
};

const calcGame = () => (engine(taskExplanationMessage, generateGame));

export default calcGame;
