import readlineSync from 'readline-sync';

import { cons, car, cdr, toString } from 'hexlet-pairs';

console.log('Welcome to the Brain Games!');

export const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${name}!`);
  return name;
}; 

export const getPlayerAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const getRightAnswerEven = () => {
  let rightAnswer;
  if (getRandomNumber() % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return rightAnswer;
};

export const getRandomNumber = Math.round(Math.random() * 20);

export const taskExplainEven = 
() => console.log('Answer "yes" if number is even; otherwise, answer "no".');
export const taskExplainCalc = console.log('What is the result of the expression?');
export const numOfTries = 3;
