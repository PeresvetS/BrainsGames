import { randomNumber } from '../functions';
import gameFlow from '../';

const task = 'Find the greatest common divisor of given numbers.\n';

export const commonDivider = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return commonDivider(num2, num1 % num2);
};

const expression = () => {
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  const randomExpression = [num1, num2].join(' ');
  const correctAnswer = commonDivider(num1, num2).toString();
  return [randomExpression, correctAnswer];
};

export default () => { gameFlow(task, expression); };
