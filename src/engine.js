// import { getPlayerName, getPlayerAnswer } from './apiBrGms';

// const engine = (taskExplanationMessage, game) => {
// 	console.log(taskExplanationMessage);
//   const playerName = getPlayerName();
//   const numOfTries = 3;
//   let i = 1;
//   for (; i <= numOfTries; i += 1) {
// 		game();
//     console.log(`Question: ${question}`);
//     const playerAnswer = getPlayerAnswer();
//     if (playerAnswer == rightAnswer) {
//         console.log('Correct!');
//     } else {
//         console.log(`'${playerAnswer}' is wrong answer ;(, Correct answer was '${rightAnswer}'.`);
//         console.log(`Let's try again, ${playerName}!`);
//     }
//   }
//   if (i === 3) {
//         console.log(`Congratulations, ${playerName}!`);	
//   }
// };
// export default engine;