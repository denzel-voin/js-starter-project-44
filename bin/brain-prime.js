#!/usr/bin/env node
import greeting from '../src/games/cli.js';
import primeFunc from '../src/games/prime.js';

const userName = greeting();
primeFunc(userName);
