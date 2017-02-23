import { userAnswer, userName } from './functions';

const greeting = '\nWelcome to the Brain Games!';

const gameFlow = (task, expression) => {
  console.log(greeting);
  console.log(task);
  const name = userName();
  console.log(`Hello ${name}!`);
  const iter = (acc) => {
    const [newRandNum, correctAnswer] = expression();
    const userChoice = userAnswer(newRandNum);
    const checkAnswer = correctAnswer === userChoice;
    if (acc === 0 && checkAnswer) {
      console.log('Correct!');
      console.log(`Congratulations, ${name}!`);
      return acc;
    } else if (checkAnswer) {
      console.log('Correct!');
      return iter(acc - 1);
    }
    console.log(`"${userChoice}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${name}!`);
    return acc;
  };
  return iter(2);
};

export default gameFlow;
