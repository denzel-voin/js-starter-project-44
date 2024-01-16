import readlineSync from 'readline-sync';
import { checkAnswer, randomNum } from '../index.js';

const evenFunc = (name) => {
  let count = 0;
  let itter = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (itter < 3) {
    itter += 1;
    const num = randomNum();
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${num} \nYour answer: `);
    checkAnswer(correctAnswer, answer, name);
    if (correctAnswer !== answer) break;
    count += 1;
    if (count === 3) console.log(`Congratulations, ${name}!`);
  }
};

export default evenFunc;
