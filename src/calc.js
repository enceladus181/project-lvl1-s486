
import engine from './engine';

const calc = () => {
  console.log('What is the result of the expression?');
  const gameIndex = 2;
  engine(gameIndex);
};

export default calc;
