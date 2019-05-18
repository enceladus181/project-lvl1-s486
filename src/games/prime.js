import engine from '..';
import { getRandomNumber } from '../apiBrGms';

const taskExplanationMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateGame = () => {
  const isPrimeInteger = (num) => {
    if (num === 1) {
      return 'no';
    }
    if (num === 2) {
      return 'yes';
    }
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const numberToCheck = getRandomNumber(1, 1000);
  const question = numberToCheck;
  const rightAnswer = isPrimeInteger(numberToCheck);
  return { question, rightAnswer };
};

const prime = () => (
  engine(taskExplanationMessage, { generateGame }));
export default prime;
