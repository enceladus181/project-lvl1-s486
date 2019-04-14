import engine from './engine';

const even = () => {
  const brainEven = 1; 
  console.log('Answer "yes" if number is even; otherwise, answer "no".');
  engine(brainEven);
};

export default even;
