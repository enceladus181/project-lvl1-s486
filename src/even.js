import readlineSync from 'readline-sync';

import sayHi, { name } from '.';

console.log('Answer "yes" if number is even otherwise answer "no".');
const even = () => {
	let num = Math.round(Math.random() * 20);
	let rightAnswer;
	const playerName = name;
	sayHi();
	if (num % 2 === 0) {
		rightAnswer = 'yes';
	}
	rightAnswer = 'no';

	console.log(`Question: ${num}`);
	const playerAnswer = readlineSync.question('Your answer: ');
	if (playerAnswer == rightAnswer) {
		console.log('Correct!');
	} else {
		console.log(`${playerAnswer} is wrong answer ;(, Correct answer was ${rightAnswer}.`);
		console.log(`Let's try again, ${playerName}!`);
	}
};

export default even;
