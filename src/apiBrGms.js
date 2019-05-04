import readlineSync from 'readline-sync';

export const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getPlayerAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
