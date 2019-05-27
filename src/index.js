import readlineSync from 'readline-sync';

const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getPlayerAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const numOfTries = 3;

const engine = (taskExplanationMessage, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(taskExplanationMessage);
  const playerName = getPlayerName();

  for (let currentTry = 1; currentTry <= numOfTries; currentTry += 1) {
    const { question, rightAnswer } = gameData();
    console.log(`Question: ${question}`);
    const playerAnswer = getPlayerAnswer();

    if (playerAnswer === rightAnswer) {
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
