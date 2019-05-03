import { 
  getPlayerName,
  getPlayerAnswer,
} from './apiBrGms';

console.log('Welcome to the Brain Games!');

const engine = (taskExplanationMessage, gameData) => {
	console.log(taskExplanationMessage);
  const playerName = getPlayerName();
  const numOfTries = 3;
  
  for (let counter = 1; counter <= numOfTries; counter += 1) {
		const { question, rightAnswer } = gameData.generateGame();
    console.log(`Question: ${question}`);
    const playerAnswer = getPlayerAnswer();

    if (playerAnswer == rightAnswer()) {
      console.log('Correct!');
      if (counter === 3) {
        console.log(`Congratulations, ${playerName}!`); 
      }
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(, Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }
};

export default engine;
