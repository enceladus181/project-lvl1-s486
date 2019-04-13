import {
  getRandomNumber,
  numOfTries,
  getPlayerName,
  getPlayerAnswer,
  getRightAnswerEven,
  taskExplainEven as taskExplain
} from '.';

const even = () => {
  taskExplain();
  getPlayerName();

  for (let i = 1; i <= numOfTries; i += 1) {
    console.log(`Question: ${getRandomNumber()}`);
    if (getPlayerAnswer == getRightAnswerEven) {
      console.log('Correct!');
    } else {
      console.log(`'${getPlayerAnswer}' is wrong answer ;(, Correct answer was 
      	'${getRightAnswerEven}'.`);
      console.log(`Let's try again, ${getPlayerName}!`);
      break;
    }
	if (i === 3) {
      console.log(`Congratulations, ${getPlayerName}!`);	
    }
  }
};

export default even;
