import readlineSync from 'readline-sync';
import { checkAnswer, gcd, randomNum } from '../index.js';

const gcdFunc = (name) => {
  let count = 0;
  let itter = 0;
  console.log('Find the greatest common divisor of given numbers.');
  while (itter < 3) {
    itter += 1;
    const numFirst = randomNum();
    const numSecond = randomNum();
    const correctAnswer = gcd(numFirst, numSecond);
    const answer = readlineSync.question(`Question: ${numFirst} ${numSecond} \nYour answer: `);
    const userAnswer = Number(answer);
    checkAnswer(correctAnswer, userAnswer, name);
    if (correctAnswer !== userAnswer) break;
    count += 1;
    if (count === 3) console.log(`Congratulations, ${name}!`);
  }
};

export default gcdFunc;
