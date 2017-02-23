import readlineSync from 'readline-sync';

export const userName = () => readlineSync.question('May I have your name? ');

export const randomNumber = (min, max) => (Math.floor(Math.random() * ((max - min) + 1)) + min);

export const userAnswer = expression => readlineSync.question(`Question: ${expression} \nYour answer: `);
