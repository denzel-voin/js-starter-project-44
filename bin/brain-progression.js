#!/usr/bin/env node
import greeting from '../src/games/cli.js';
import progression from '../src/games/progression.js';

const userName = greeting();
progression(userName);
