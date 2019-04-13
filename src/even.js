import readlineSync from 'readline-sync';

import sayHi from '.';

const taskExplain = () => console.log('Answer "yes" if number is even; otherwise, answer "no".');

const even = () => {
  let rightAnswer;
  taskExplain();
  const playerName = sayHi();
  const getRandom = () => Math.round(Math.random() * 20);

  const numOfTries = 3;
  for (let i = 1; i <= numOfTries; i += 1) {
	if (getRandom() % 2 === 0) {
		rightAnswer = 'yes';
	} else {
		rightAnswer = 'no';
  }

  console.log(`Question: ${getRandom()}`);
  const playerAnswer = readlineSync.question('Your answer: ');
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

export default even;
