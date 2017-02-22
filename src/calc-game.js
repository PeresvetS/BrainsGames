import { cons, car, cdr } from './index';
import { randomNumber, randomSign, correctExpression, userAnswer, UserName, gameCondition } from './functions';

const calcGame = () => {
  console.log('Welcome to the Brain Games! \nWhat is the result of the expression?');
  const name = UserName();
  console.log(`Hello ${name}!`);

  const game = () => {
    const iter = (acc) => {
      const pairs = cons(randomNumber(1, 25), randomNumber(1, 25));
      const sign = randomSign();
      const randomExpression = [car(pairs), sign, cdr(pairs)].join(' ');
      const valueAnswer = userAnswer(randomExpression);
      const correctAnswer = correctExpression(car(pairs), cdr(pairs), sign);
      const checkAnswer = correctAnswer === Number(valueAnswer);

      gameCondition(iter, acc, checkAnswer, name, valueAnswer, correctAnswer);
    };
    return iter(2);
  };
  game();
};
export default calcGame;
