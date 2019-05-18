import {
  getPlayerName,
  getPlayerAnswer,
} from './apiBrGms';

console.log('Welcome to the Brain Games!');

const engine = (taskExplanationMessage, gameData) => {
  console.log(taskExplanationMessage);
  const playerName = getPlayerName();
  const numOfTries = 3;

  for (let currentTry = 1; currentTry <= numOfTries; currentTry += 1) {
    const { question, rightAnswer } = gameData();
    console.log(`Question: ${question}`);
    const playerAnswer = getPlayerAnswer();

    if (playerAnswer === rightAnswer.toString(10)) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(, Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default engine;
