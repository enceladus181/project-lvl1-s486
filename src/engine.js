import { getPlayerName, getPlayerAnswer, getRandomNumber } from '.';

const engine = (gameName) => {
  const playerName = getPlayerName();
  const numOfTries = 3;
  let rightAnswer;
  let question;
  for (let i = 1; i <= numOfTries; i += 1) {
    if (gameName === 1) {
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
    } else if (gameName === 2) {
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
    } else if (gameName === 3) {
      const getGcdOfTwoNumbers = (a, b) => {
        if (!b) {
         return a;
        }
       return getGcdOfTwoNumbers(b, a % b);
      };
      const operand1 = getRandomNumber();
      const operand2 = getRandomNumber();
      question = `${operand1} ${operand2}`;
      rightAnswer = getGcdOfTwoNumbers(operand1, operand2);
    }
/*==================================================================================*/

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
