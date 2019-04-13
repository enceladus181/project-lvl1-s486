import { cons, car, cdr, toString } from 'hexlet-pairs';

import {
  getPlayerName,
  getPlayerAnswer,
  getRandomNumber,
  numOfTries,
  taskExplainCalc,
} from '.';


export default calc = () => {
  taskExplainCalc();
  getPlayerName();
  for (let i = 1; i <= numOfTries; i += 1) {
    console.log();
  }
  

	const getRightAnswerCalc = () => {
		let rightAnswerCalc;
		const triplet = cons(getRandomNumber(), cons(getRandomNumber(), getRandomNumber()));
			if (car(cdr(triplet)) <= 7) {
			rightAnswerCalc = car(triplet) * cdr(cdr(triplet));
		} else if (car(cdr(triplet)) <= 14) {
			rightAnswerCalc = car(triplet) + cdr(cdr(triplet));
		} else {
			rightAnswerCalc = car(triplet) - cdr(cdr(triplet));
		}
			console.log(`Question: ${car(triplet)} ${car(cdr(triplet))} ${cdr(cdr(triplet))}`);
			return rightAnswerCalc;
		};
};
