import readlineSync from 'readline-sync';
import { checkAnswer, primeNum, randomNum } from '../index.js';

const primeFunc = (name) => {
  let count = 0;
  let itter = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (itter < 3) {
    itter += 1;
    const num = randomNum(1, 100);
    const correctAnswer = primeNum(num);
    const answer = readlineSync.question(`Question: ${num} \nYour answer: `);
    checkAnswer(correctAnswer, answer, name);
    if (correctAnswer !== answer) break;
    count += 1;
    if (count === 3) console.log(`Congratulations, ${name}!`);
  }
};

export default primeFunc;
