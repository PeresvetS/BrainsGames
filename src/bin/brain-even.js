#!/usr/bin/env node

import readlineSync from '../';

console.log('Welcome to the Brain Games! \nAnswer "yes" if number odd otherwise answer "no".');

const UserName = readlineSync.question('May I have your name? ');
console.log(`Hello ${UserName}!`);


// This is the main function for the realization of the even-game.
const game = () => {
  const iter = (acc) => {
    const randomNumber = (min, max) => (Math.floor(Math.random() * ((max - min) + 1)) + min);
    const newRandomNumber = randomNumber(1, 100);
    const userAnswer = readlineSync.question(`Question: ${newRandomNumber} \nYour answer: (yes/no) `);
    const checkAnswer = userAnswer === 'yes';
    const checkNumber = newRandomNumber % 2 === 0;
    const checkResult = checkAnswer === checkNumber;
    const anyAswer = checkAnswer ? 'no' : 'yes';

    if (acc === 0 && checkResult) {
      console.log('Correct!');
      console.log(`Congratulations, ${UserName}!`);
      return acc;
    } else if (checkResult) {
      console.log('Correct!');
      return iter(acc - 1);
    }
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${anyAswer}". \nLet's try again, ${UserName}!`);
    return acc;
  };
  return iter(2);
};

game();
