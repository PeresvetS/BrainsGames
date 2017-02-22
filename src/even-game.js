import { cons } from 'hexlet-pairs';
import { randomNumber } from './functions';
import gameFlow from './index';

const task = 'Answer "yes" if number odd otherwise answer "no".';
const expression = () => {
  const newRandomNumber = randomNumber(1, 100);
  const correctAnswer = newRandomNumber % 2 === 0 ? 'yes' : 'no';
  return cons(newRandomNumber, correctAnswer);
};
export default () => { gameFlow(task, expression); };
