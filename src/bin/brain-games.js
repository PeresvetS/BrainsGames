#!/usr/bin/env node

import readlineSync from '../';


console.log("Welcome to the Brain Games!");

const UserName = readlineSync.question('May I have your name? ');
console.log('Hello ' + UserName + '!');
