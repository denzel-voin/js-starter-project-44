import readlineSync from 'readline-sync';
import {
  randomNum, checkAnswer, randomSymbol, expression,
} from '../index.js';

const calcFunc = (name) => {
  let count = 0;
  let itter = 0;
  console.log('What is the result of the expression?');
  while (itter < 3) {
    itter += 1;
    const num1 = randomNum();
    const num2 = randomNum();
    const symbol = randomSymbol();
    const answer = readlineSync.question(`Question: ${num1} ${symbol} ${num2} \n`);
    const userNum = Number(answer);
    const trueAnswer = expression(symbol, num1, num2);
    checkAnswer(trueAnswer, userNum, name);
    if (trueAnswer !== Number(answer)) break;
    count += 1;
    if (count === 3) console.log(`Congratulations, ${name}!`);
  }
};

export default calcFunc;
