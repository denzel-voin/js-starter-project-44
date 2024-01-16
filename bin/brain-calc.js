import { calcFunc, randomNumber, randomSymbol } from '../src/calc.js';
import greeting from '../src/cli.js';

const userName = greeting();
calcFunc(randomNumber, randomSymbol, userName);
