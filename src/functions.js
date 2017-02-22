import { readlineSync } from './index';

export const UserName = () => readlineSync.question('May I have your name? ');

export const userAnswer = expression => readlineSync.question(`Question: ${expression} \nYour answer: `);

export const randomNumber = (min, max) => (Math.floor(Math.random() * ((max - min) + 1)) + min);

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
