import { getPlayerName, getPlayerAnswer, getRandomNumber } from '.';

const engine = (version) => {
  const playerName = getPlayerName();
  const numOfTries = 3;
  let rightAnswer;
  let question;
  for (let i = 1; i <= numOfTries; i += 1) {
    if (version === 1) {
      const randomNumber = getRandomNumber();
      const isEvenOrOdd = () => {
        let yesOrNo;
        if (randomNumber % 2 === 0) {
          yesOrNo = 'yes';
        } else {
          yesOrNo = 'no';
        }
        return yesOrNo;
      };
      question = randomNumber;
      rightAnswer = isEvenOrOdd();
    } else if (version === 2) {
      const getRandomOperator = (arr) => Math.floor(Math.random() * arr.length);
      const operand1 = getRandomNumber();
      const operand2 = getRandomNumber();
      const operators = ['-', '+', '*'];
      const operator = getRandomOperator(operators);
      const expressions = [operand1 - operand2,
													operand1 + operand2,
													operand1 * operand2];

      question = `${operand1} ${operators[operator]} ${operand2}`;
      rightAnswer = expressions[operator];
    }

    console.log(`Question: ${question}`);
    const playerAnswer = getPlayerAnswer();
    if (playerAnswer == rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(, Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
	if (i === 3) {
      console.log(`Congratulations, ${playerName}!`);	
    }
  }
};
export default engine;
