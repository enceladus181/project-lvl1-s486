import engine from '..';
import getRandomNumber from '../utils';

const taskExplanationMessage = 'What is the result of the expression?';
const operators = ['-', '+', '*'];

const generateGame = () => {
  const operand1 = getRandomNumber(0, 21);
  const operand2 = getRandomNumber(0, 21);
  const operatorIndex = getRandomNumber(0, operators.length);
  let result;

  switch (operatorIndex) {
    case 0:
      result = operand1 - operand2;
      break;
    case 1:
      result = operand1 + operand2;
      break;
    default:
      result = operand1 * operand2;
  }

  const rightAnswer = result.toString(10);
  const question = `${operand1} ${operators[operatorIndex]} ${operand2}`;
  return { question, rightAnswer };
};

const calcGame = () => (engine(taskExplanationMessage, generateGame));

export default calcGame;
