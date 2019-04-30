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

const question = () => `${operand1} ${operators[operator]} ${operand2}`;
const rightAnswer = () => expressions[operator];

export default engine(taskExplanationMessage, question, rightAnswer);
