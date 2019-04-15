import engine from './engine';
import getRandomNumber from './apiBrGms';

const even = () => {
  const taskExplanationMessage = 'Answer "yes" if number is even; otherwise, answer "no".';
  const numOfTries = 3;
  const isEvenOrOdd = (number) => {
    let yesOrNo;
    if (number % 2 === 0) {
      yesOrNo = 'yes';
    } else {
      yesOrNo = 'no';
    }
      return yesOrNo;
  };

  for (let i = 1; i <= numOfTries; i += 1) {
    const randomNumber = getRandomNumber();
    const question = randomNumber;
    const rightAnswer = isEvenOrOdd(randomNumber);
    engine(taskExplanationMessage, question, rightAnswer, i);
  }
};

export default even;
