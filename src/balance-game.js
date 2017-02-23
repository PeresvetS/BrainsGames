import { randomNumber } from './functions';
import gameFlow from './';

const task = 'Balance the given number.';

export const balance = (number) => {
  const arrNum = number.toString().split('').map(num => Number(num)).sort();
  while (arrNum[arrNum.length - 1] - arrNum[0] > 1) {
    arrNum[arrNum.length - 1] -= 1;
    arrNum[0] += 1;
    arrNum.sort();
  }
  return arrNum.join('');
};

const expression = () => {
  const newRandNum = randomNumber(102, 9997);
  const correctAnswer = balance(newRandNum);
  return [newRandNum, correctAnswer];
};

export default () => { gameFlow(task, expression); };
