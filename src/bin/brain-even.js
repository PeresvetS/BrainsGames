#!/usr/bin/env node

import readlineSync from '../';

console.log('Welcome to the Brain Games! \nAnswer "yes" if number odd otherwise answer "no".');

const UserName = readlineSync.question('May I have your name? ');
console.log('Hello ' + UserName + '!');

let resultAnswer;


// This is the main function for the realization of the game.
const game = () => {

	const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

	const newRandomNumber = randomNumber(1, 100);

	const userAnswer = readlineSync.question(`Question: ${newRandomNumber} \nYour answer: (yes/no) `);

	const checkAnswer = (value, answer) => {
		if (value % 2 === 0 && answer === 'yes') {
			return 'Correct!';
		}
		else if (value % 2 !== 0 && answer === 'no') {
			return 'Correct!';
		}
		else if (value % 2 === 0 && answer === 'no') {
			return '"no" is wrong answer ;(. Correct answer was "yes". \nLet\'s try again, ' + UserName + '!';
		}
		else if (value % 2 !== 0 && answer === 'yes') {
			return '"yes" is wrong answer ;(. Correct answer was "no". \nLet\'s try again, ' + UserName + '!';
		}
	};

	resultAnswer = checkAnswer(newRandomNumber, userAnswer);

};

game();

// Here we define the correct answer and continue or finish the game.
const continueGame = (value) => {
	for (let i = 0; i < 2 && resultAnswer === "Correct!"; i++) {
				console.log(resultAnswer);
				game();
		}
	if (resultAnswer === "Correct!") {
		console.log(resultAnswer);
		console.log('Congratulations, ' + UserName + '!');
	}
	else {
				console.log(resultAnswer);
		}
};

continueGame(resultAnswer);
