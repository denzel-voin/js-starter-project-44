#!/usr/bin/env node
import evenFunc from '../src/games/even.js';
import greeting from '../src/games/cli.js';

const userName = greeting();
evenFunc(userName);
