import engine from '.';
import { getRandomNumber } from './apiBrGms';

const evenGame = () => {
  const taskExplanationMessage = 'Answer "yes" if number is even; otherwise, answer "no".';
  const generateGame = () => {
    const isEvenOrOdd = (number) => {
      let yesOrNo;
      if (number % 2 === 0) {
        yesOrNo = 'yes';
      } else {
        yesOrNo = 'no';
      }
        return yesOrNo;
    };
    const randomNumber = getRandomNumber();
    const question = randomNumber;
    const rightAnswer = isEvenOrOdd(randomNumber);
    return { question, rightAnswer };
  };

  return engine(taskExplanationMessage, generateGame);
};

export default evenGame();
