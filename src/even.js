import engine from './engine';

const even = () => {
  const gameIndex = 1; 
  console.log('Answer "yes" if number is even; otherwise, answer "no".');
  engine(gameIndex);
};

export default even;
