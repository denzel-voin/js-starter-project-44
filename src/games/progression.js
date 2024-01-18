import readlineSync from 'readline-sync';
import { checkAnswer, randomNum, randomArray } from '../index.js';

const progression = (name) => {
  let count = 0;
  let itter = 0;
  console.log('What number is missing in the progression?');
  while (itter < 3) {
    itter += 1;
    const arrNums = randomArray();
    const randomIndex = randomNum(0, arrNums.length - 1);
    const trueAnswer = arrNums[randomIndex];
    arrNums[randomIndex] = '..';
    const answer = readlineSync.question(`Question: ${arrNums.join(' ')} \nYour answer: `);
    const userNumber = Number(answer);
    checkAnswer(trueAnswer, userNumber, name);
    if (trueAnswer !== userNumber) break;
    count += 1;
    if (count === 3) console.log(`Congratulations, ${name}!`);
  }
};

export default progression;
