import { 
  getPlayerName,
  getPlayerAnswer,
} from './apiBrGms';

console.log('Welcome to the Brain Games!');

const engine = (taskExplanationMessage, gameData) => {
  console.log(taskExplanationMessage);
  const playerName = getPlayerName();
  const numOfTries = 3;
  let currentTry = 1;

  for (; currentTry <= numOfTries; currentTry += 1) {
		const { question, rightAnswer } = gameData.generateGame();
    console.log(`Question: ${question}`);
    const playerAnswer = getPlayerAnswer();
    
    if (playerAnswer === rightAnswer.toString(10)) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(, Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
    if (currentTry === 3) {
      console.log(`Congratulations, ${playerName}!`); 
    }
  }
};

export default engine;
