import engine from '..';
import getRandomNumber from '../utils';

const taskExplanationMessage = 'What number is missing in the progression?';
const generateGame = () => {
  const arr = [];
  let firstElementOfProgression = getRandomNumber(1, 10);
  const difference = getRandomNumber(1, 20);
  const sizeOfProgression = 10;
  for (let i = 0; i < sizeOfProgression; i += 1) {
    arr.push(firstElementOfProgression);
    firstElementOfProgression += difference;
  }

  const hiddenNumPosition = getRandomNumber(0, arr.length);
  const bufferArray = arr.slice(0);
  bufferArray.splice(hiddenNumPosition, 1, '..');
  const question = bufferArray.join(' ');
  const rightAnswer = arr[hiddenNumPosition].toString(10);

  return { question, rightAnswer };
};

const progressionGame = () => (
  engine(taskExplanationMessage, generateGame));

export default progressionGame;
