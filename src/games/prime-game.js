import { randomNumber } from '../functions';
import gameFlow from '../';

const task = 'Answer "yes" if the number is simple otherwise answer "no".';

const isSimpleNum = (num) => {
  const iter = (item, acc) => {
    if (item === acc) {
      return true;
    } else if (item % acc === 0) {
      return false;
    }
    const newAcc = acc + 1;
    return iter(item, newAcc);
  };
  return iter(num, 2);
};

const expression = () => {
  const newRandNum = randomNumber(3, 33);
  const correctAnswer = isSimpleNum(newRandNum) ? 'yes' : 'no';
  return [newRandNum, correctAnswer];
};

export default () => { gameFlow(task, expression); };
