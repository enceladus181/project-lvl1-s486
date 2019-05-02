import engine from '.';
import { getRandomNumber } from './apiBrGms';

const taskExplanationMessage = 'What is the result of the expression?';
const operand1 = getRandomNumber();
const operand2 = getRandomNumber();
const operators = ['-', '+', '*'];
const getRandomOperator = (arr) => Math.floor(Math.random() * arr.length);
const operator = getRandomOperator(operators);
const expressions = [operand1 - operand2,
                       operand1 + operand2,
                       operand1 * operand2];

<<<<<<< Updated upstream
const question = () => `${operand1} ${operators[operator]} ${operand2}`;
const rightAnswer = () => expressions[operator];
||||||| merged common ancestors
const calcGame = () => {
  const generateCalcGame = () => {
    const operand1 = getRandomNumber();
    const operand2 = getRandomNumber();
    const operators = ['-', '+', '*'];
    const getRandomOperator = (arr) => Math.floor(Math.random() * arr.length);
    const operator = getRandomOperator(operators);
    const expressions = [operand1 - operand2,
                           operand1 + operand2,
                           operand1 * operand2];
    const getQuestion = () => `${operand1} ${operators[operator]} ${operand2}`;
    const getRightAnswer = () => expressions[operator];
    return { getQuestion, getRightAnswer };
  };
  return engine(taskExplanationMessage, generateCalcGame);
}
=======
const calcGame = () => {
  const generateCalcGame = () => {
    const operand1 = getRandomNumber();
    const operand2 = getRandomNumber();
    const operators = ['-', '+', '*'];
    const getRandomOperator = (arr) => Math.floor(Math.random() * arr.length);
    const operator = getRandomOperator(operators);
    const expressions = [operand1 - operand2,
                           operand1 + operand2,
                           operand1 * operand2];
    const question = `${operand1} ${operators[operator]} ${operand2}`;
    const rightAnswer = expressions[operator];
    return { question, rightAnswer };
  };
  return engine(taskExplanationMessage, { generateCalcGame });
};
>>>>>>> Stashed changes

export default engine(taskExplanationMessage, question, rightAnswer);
