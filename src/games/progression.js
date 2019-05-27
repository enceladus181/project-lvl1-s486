import engine from '..';
import getRandomNumber from '../utils';

const taskExplanationMessage = 'What number is missing in the progression?';
const sizeOfProgression = 10;

const generateGame = () => {
  const arr = [];
  const firstElementOfProgression = 1;
  const difference = getRandomNumber(1, 20);
  let currentElementOfProgression = firstElementOfProgression;

  for (let i = 0; i < sizeOfProgression; i += 1) {
    arr.push(currentElementOfProgression);
    currentElementOfProgression += difference;
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
