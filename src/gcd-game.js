import { cons, car, cdr } from 'hexlet-pairs';
import { randomNumber, commonDivider } from './functions';
import gameFlow from './index';

const task = 'Find the greatest common divisor of given numbers.';
const expression = () => {
  const pairs = cons(randomNumber(1, 100), randomNumber(1, 100));
  const randomExpression = [car(pairs), cdr(pairs)].join(' ');
  const correctAnswer = commonDivider(car(pairs), cdr(pairs)).toString();
  return cons(randomExpression, correctAnswer);
};

export default () => { gameFlow(task, expression); };
