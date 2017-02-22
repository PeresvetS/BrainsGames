import readlineSync from 'readline-sync';

export const userName = () => readlineSync.question('May I have your name? ');

export const randomNumber = (min, max) => (Math.floor(Math.random() * ((max - min) + 1)) + min);

export const userAnswer = expression => readlineSync.question(`Question: ${expression} \nYour answer: `);

export const commonDivider = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return commonDivider(num2, num1 % num2);
};

export const balance = (number) => {
  const arrNum = number.toString().split('').map(num => Number(num)).sort();
  while (arrNum[arrNum.length - 1] - arrNum[0] > 1) {
    arrNum[arrNum.length - 1] -= 1;
    arrNum[0] += 1;
    arrNum.sort();
  }
  return arrNum.join('');
};


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

export const gameCondition = (func, acc, checkAnswer, name, valueAnswer, correctAnswer) => {
  if (acc === 0 && checkAnswer) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
    return acc;
  } else if (checkAnswer) {
    console.log('Correct!');
    return func(acc - 1);
  }
  console.log(`"${valueAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${name}!`);
  return acc;
};
