import name from '../src/cli.js';
import {calcFunc, randomNumber, randomSymbol} from "../src/calc.js";


console.log('Welcome to the Brain Games!');
const userName = name();
console.log(`Hello, ${userName}!`);

calcFunc(randomNumber, randomSymbol, userName)