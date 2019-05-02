import { 
  getPlayerName,
  getPlayerAnswer,
} from './apiBrGms';

console.log('Welcome to the Brain Games!');

const engine = (taskExplanationMessage, question, rightAnswer) => {
	console.log(taskExplanationMessage);
  const playerName = getPlayerName();
  const numOfTries = 3;
<<<<<<< Updated upstream
  let i = 1;
  for (; i <= numOfTries; i += 1) {
    console.log(`Question: ${question()}`);
||||||| merged common ancestors
  let i = 1;
  for (; i <= numOfTries; i += 1) {
		const question = gameData.getQuestion();
    console.log(`Question: ${question}`);
=======
  let counter = 1;
  
  for (; counter <= numOfTries; counter += 1) {
		const { question, rightAnswer } = gameData.generateCalcGame();
    console.log(`Question: ${question}`);
>>>>>>> Stashed changes
    const playerAnswer = getPlayerAnswer();
<<<<<<< Updated upstream
    
    if (playerAnswer == rightAnswer()) {
        console.log('Correct!');
||||||| merged common ancestors
    if (playerAnswer == rightAnswer) {
        console.log('Correct!');
=======
    
    if (playerAnswer == rightAnswer) {
      console.log('Correct!');
>>>>>>> Stashed changes
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(, Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
    if (counter === 3) {
    	console.log(`Congratulations, ${playerName}!`);	
		}
  }
};

export default engine;
