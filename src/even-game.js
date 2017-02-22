import { randomNumber, userAnswer, UserName, gameCondition } from './functions';

const evenGame = () => {
  console.log('Welcome to the Brain Games! \nAnswer "yes" if number odd otherwise answer "no".');
  const name = UserName();
  console.log(`Hello ${name}!`);

  const game = () => {
    const iter = (acc) => {
      const newRandomNumber = randomNumber(1, 100);
      const valueAnswer = userAnswer(newRandomNumber);
      const checkAnswer = valueAnswer === 'yes';
      const checkNumber = newRandomNumber % 2 === 0;
      const checkResult = checkAnswer === checkNumber;
      const anyAswer = checkAnswer ? 'no' : 'yes';
      gameCondition(iter, acc, checkResult, name, valueAnswer, anyAswer);
    };
    return iter(2);
  };
  game();
};
export default evenGame;
