#!/usr/bin/env node
import { random, evenFunc } from '../src/even.js';
import greeting from '../src/cli.js';

const userName = greeting();
evenFunc(random, userName);
