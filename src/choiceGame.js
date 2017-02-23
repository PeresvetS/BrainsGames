import readlineSync from 'readline-sync';
import evenGame from './games/even-game';
import calcGame from './games/calc-game';
import gcdGame from './games/gcd-game';
import balanceGame from './games/balance-game';
import progressionGame from './games/progression-game';
import primeGame from './games/prime-game';


const choice = () => {
  const choiceGame = () => readlineSync.question(`What game would you like to play?\n
Select the number of the game!

  1) brain-even
  2) brain-calc
  3) brain-gcd
  4) brain-balanc
  5) brain-progression
  6) brain-prime

Number: `);

  switch (choiceGame()) {
    case '1':
      return evenGame();
    case '2':
      return calcGame();
    case '3':
      return gcdGame();
    case '4':
      return balanceGame();
    case '5':
      return progressionGame();
    case '6':
      return primeGame();
    default:
      console.log('Try again, this number has no game!');
      return choiceGame();
  }
};

export default choice;
