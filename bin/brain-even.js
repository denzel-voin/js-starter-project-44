#!/usr/bin/env node
import { random, evenFunc } from '../src/even.js';
import name from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = name();
console.log(`Hello, ${userName}!`);

evenFunc(random, userName);
