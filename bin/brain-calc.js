#!/usr/bin/env node
import calcFunc from '../src/games/calc.js';
import greeting from '../src/games/cli.js';

const userName = greeting();
calcFunc(userName);
