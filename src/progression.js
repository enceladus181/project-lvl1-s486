import engine from './engine';

const progression = () => {
  console.log('What number is missing in the progression?');
  const gameIndex = 4;
  engine(gameIndex);
};

export default progression;

