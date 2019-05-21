import engine from '..';
import { getRandomNumber } from '../utils';

const taskExplanationMessage = 'Answer "yes" if number is even; otherwise, answer "no".';
const isEven = number => number % 2 === 0;

const generateGame = () => {
  const question = getRandomNumber(0, 21);
  const rightAnswer = (isEven(question)) ? 'yes' : 'no';

  return { question, rightAnswer };
};

const evenGame = () => (
  engine(taskExplanationMessage, generateGame));

export default evenGame;
