import { randomNumber } from '../functions';
import gameFlow from '../';

const task = 'What number is missing in this progression?';

const progression = (num1, num2) => {
  const iter = (item, acc) => {
    if (acc.length === 10) {
      return acc;
    }
    acc.push(item);
    const newItem = item + num2;
    return iter(newItem, acc);
  };
  return iter(num1, []);
};

const expression = () => {
  const num1 = randomNumber(0, 9);
  const num2 = randomNumber(2, 9);
  const progArr = progression(num1, num2);
  const correctAnswer = progArr[num1].toString();
  const questionArr = progArr.map(arr => (arr === progArr[num1] ? '..' : arr));
  const questionStr = questionArr.toString().replace(/,/g, ' ');
  return [questionStr, correctAnswer];
};

export default () => { gameFlow(task, expression); };
