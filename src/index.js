import { car, cdr } from 'hexlet-pairs';
import { userAnswer, userName, gameCondition } from './functions';

const greeting = 'Welcome to the Brain Games!';

const gameFlow = (task, expression) => {
  console.log(greeting);
  console.log(task);
  const name = userName();
  console.log(`Hello ${name}!`);
  const iter = (acc) => {
    const stableExpression = expression();
    const correctAnswer = cdr(stableExpression);
    const newRandomNumber = car(stableExpression);
    const userChoice = userAnswer(newRandomNumber);
    const checkAnswer = correctAnswer === userChoice;
    gameCondition(iter, acc, checkAnswer, name, userChoice, correctAnswer);
  };
  return iter(2);
};

export default gameFlow;
