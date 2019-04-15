import engine from './engine';
import { getRandomNumber } from './apiBrGms';

const calc = () => {
  const taskExplanationMessage = 'What is the result of the expression?';
  const getRandomOperator = (arr) => Math.floor(Math.random() * arr.length);
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const operators = ['-', '+', '*'];
  const operator = getRandomOperator(operators);
  const expressions = [operand1 - operand2,
                       operand1 + operand2,
                       operand1 * operand2];
  const numOfTries = 3;

  for (let i = 1; i <= numOfTries; i += 1) {
    const question = `${operand1} ${operators[operator]} ${operand2}`;
    const rightAnswer = expressions[operator];
    engine(taskExplanationMessage, question, rightAnswer, i);
  }
};

export default calc;
