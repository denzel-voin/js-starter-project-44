#!/usr/bin/env node
import greeting from '../src/games/cli.js';
import gcdFunc from '../src/games/gcd.js';

const userName = greeting();

gcdFunc(userName);
