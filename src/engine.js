import { getPlayerName, getPlayerAnswer } from '.';

const engine = (taskExplanationMessage, question, rightAnswer, numOfTry) => {
	console.log(taskExplanationMessage);
  const playerName = getPlayerName();
  console.log(`Question: ${question}`);
  const playerAnswer = getPlayerAnswer();
  if (playerAnswer === rightAnswer) {
      console.log('Correct!');
  } else {
      console.log(`'${playerAnswer}' is wrong answer ;(, Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
  }
	if (numOfTry === 3) {
      console.log(`Congratulations, ${playerName}!`);	
  }
};
export default engine;
