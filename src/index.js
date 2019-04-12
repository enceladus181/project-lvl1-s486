import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');

const sayHi = () => console.log(`Hello  ${name}!`);
export default sayHi;
