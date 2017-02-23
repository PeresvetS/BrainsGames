import { randomNumber } from '../functions';
import gameFlow from '../';

const task = 'What is the result of the expression?';

export const randomSign = () => {
  const number = randomNumber(1, 3);
  switch (number) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

export const correctExpression = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const expression = () => {
  const num1 = randomNumber(1, 25);
  const num2 = randomNumber(1, 25);
  const sign = randomSign();
  const randomExpression = [num1, sign, num2].join(' ');
  const correctAnswer = correctExpression(num1, num2, sign).toString();
  return [randomExpression, correctAnswer];
};

export default () => { gameFlow(task, expression); };
