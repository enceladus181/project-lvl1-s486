import readlineSync from 'readline-sync';

import sayHi from '.';

const taskExplain = () => console.log('Answer "yes" if number is even; otherwise, answer "no".');

const even = () => {
	let rightAnswer;
	taskExplain();
	const playerName = sayHi();
	let num;

	for (let i = 1; i <= 3; i += 1) {
		num = Math.round(Math.random() * 20);
		if (num % 2 === 0) {
			rightAnswer = 'yes';
		} else {
			rightAnswer = 'no';
		}

		console.log(`Question: ${num}`);
		
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
