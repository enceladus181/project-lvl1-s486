import { cons, car, cdr, } from 'hexlet-pairs';

// toString
import {
  getPlayerName,
  getPlayerAnswer,
  getRandomNumber,
  // numOfTries,
  taskExplainCalc,
} from '.';

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

const calc = () => {
  taskExplainCalc();
  getPlayerName();
  // for (let i = 1; i <= numOfTries; i += 1) {
    console.log(`Question: ${car(triplet)} ${getMathSymbol} ${cdr(cdr(triplet))}`);
    if (getPlayerAnswer == getRightAnswerCalc) {
      console.log('Correct!');
    } else {
      console.log(`'${getPlayerAnswer}' is wrong answer ;(, Correct answer was 
      	'${getRightAnswerCalc}'.`);
      console.log(`Let's try again, ${getPlayerName}!`);
      // break;
    }
	// if (i === 3) {
 //      console.log(`Congratulations, ${getPlayerName}!`);	
    // }
  // }
};

export default calc;
