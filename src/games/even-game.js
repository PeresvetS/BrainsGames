import { randomNumber } from '../functions';
import gameFlow from '../';

const task = 'Answer "yes" if number odd otherwise answer "no".\n';

const expression = () => {
  const newRandNum = randomNumber(1, 100);
  const correctAnswer = newRandNum % 2 === 0 ? 'yes' : 'no';
  return [newRandNum, correctAnswer];
};

export default () => { gameFlow(task, expression); };
