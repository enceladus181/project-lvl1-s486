import { cons, car, cdr, } from 'hexlet-pairs';

import {
  getPlayerName,
  getPlayerAnswer,
  getRandomNumber,
  // numOfTries,
} from '.';

const taskExplainCalc = console.log('What is the result of the expression?');
const triplet = cons(getRandomNumber(), cons(getRandomNumber(), getRandomNumber()));

const getRightAnswerCalc = () => {
	let rightAnswerCalc;
	if (car(cdr(triplet)) <= 7) {
		rightAnswerCalc = car(triplet) * cdr(cdr(triplet));
	} else if (car(cdr(triplet)) <= 14) {
		rightAnswerCalc = car(triplet) + cdr(cdr(triplet));
	} else {
		rightAnswerCalc = car(triplet) - cdr(cdr(triplet));
	}
	return rightAnswerCalc;
};

const getMathSymbol = () => {
  let mathSymbol;
  if (car(cdr(triplet)) <= 7) {
    mathSymbol = '*';
  } else if (car(cdr(triplet)) <= 14) {
    mathSymbol = '+';
  } else {
    mathSymbol = '-';
  }
  return mathSymbol;
};

export default calc;
