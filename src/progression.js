import engine from '.';
import { getRandomNumber } from './apiBrGms';

const progressionGame = () => {
	const taskExplanationMessage = 'What number is missing in the progression?';
	const generateGame = () => {
		const arr = [];
		let bufferNum = getRandomNumber(1, 10);
		const difference = getRandomNumber(1, 20);

		for (; arr.length <= 9;) {
			arr.push(bufferNum);
			bufferNum = difference + bufferNum;
		}

		const hiddenNumPosition = getRandomNumber(0, 10);
		const bufferArray = arr.slice(0);
		bufferArray.splice(hiddenNumPosition, 1, '..');
		const question = bufferArray.join(' ');
		const rightAnswer = arr[hiddenNumPosition];

		return { question, rightAnswer };
	};

	return engine(taskExplanationMessage, { generateGame });
};

export default progressionGame;
