import { cons } from 'hexlet-pairs';
import { randomNumber, balance } from './functions';
import gameFlow from './index';

const task = 'Balance the given number.';

const expression = () => {
  const newRandomNumber = randomNumber(102, 9997);
  const correctAnswer = balance(newRandomNumber);
  return cons(newRandomNumber, correctAnswer);
};

export default () => { gameFlow(task, expression); };
