import readlineSync from 'readline-sync';
import {checkAnswer} from "./even.js";

const randomNumber = () => Math.floor(Math.random() * 100 + 1);
const randomSymbol = () => {
  const randomIndex = Math.floor(Math.random() * 3 + 1);
  let symbol;
  if (randomIndex === 1) symbol = '+';
  else if (randomIndex === 2) symbol = '-';
  else symbol = '*';
  return symbol;
};

const expression = (randomSym, num1, num2) => {
  let trueAnswer = num1 + num2;
  if (randomSym === '-') trueAnswer = num1 - num2;
  else if (randomSym === '*') trueAnswer = num1 * num2;
  return trueAnswer;
};

const calcFunc = (number, randomSym, name) => {
  let count = 0;
  let itter = 0;
  console.log('What is the result of the expression?');
  while (itter < 3) {
    itter += 1;
    const num1 = number();
    const num2 = number();
    const symbol = randomSym();
    const answer = readlineSync.question(`Question: ${num1} ${symbol} ${num2} \n`);
    const userNum = Number(answer)
    const trueAnswer = expression(symbol, num1, num2);
    checkAnswer(trueAnswer, userNum, name);
    if (trueAnswer !== Number(answer)) break;
    count += 1;
    if (count === 3) console.log(`Congratulations, ${name}!`);
  }
};

export {
  calcFunc, expression, checkAnswer, randomSymbol, randomNumber,
};
