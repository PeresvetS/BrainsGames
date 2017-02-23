import readlineSync from 'readline-sync';

export const userName = () => readlineSync.question('May I have your name? ');

export const randomNumber = (min, max) => (Math.floor(Math.random() * ((max - min) + 1)) + min);

export const userAnswer = expression => readlineSync.question(`Question: ${expression} \nYour answer: `);

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
