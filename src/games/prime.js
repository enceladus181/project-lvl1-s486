import engine from '..';
import getRandomNumber from '../utils';

const taskExplanationMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrimeInteger = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGame = () => {
  const numberToCheck = getRandomNumber(1, 1000);
  const question = numberToCheck;
  const rightAnswer = (isPrimeInteger(numberToCheck)) ? 'yes' : 'no';
  return { question, rightAnswer };
};

const prime = () => (
  engine(taskExplanationMessage, generateGame));

export default prime;
