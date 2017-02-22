import { cons, car, cdr } from 'hexlet-pairs';
import { randomNumber, randomSign, correctExpression } from './functions';
import gameFlow from './index';

const task = 'What is the result of the expression?';
const expression = () => {
  const pairs = cons(randomNumber(1, 25), randomNumber(1, 25));
  const sign = randomSign();
  const randomExpression = [car(pairs), sign, cdr(pairs)].join(' ');
  const correctAnswer = correctExpression(car(pairs), cdr(pairs), sign).toString();
  return cons(randomExpression, correctAnswer);
};
export default () => { gameFlow(task, expression); };
