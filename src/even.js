import readlineSync from 'readline-sync';

const random = () => Math.floor(Math.random() * 100 + 1);

const evenFunc = (randomNum, name) => {
  let loop = true;
  let count = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (loop) {
    const num = randomNum();
    const answer = readlineSync.question(`Question: ${num} \n`);
    if (num % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        count = 0;
        console.log(`Congratulations, ${name}!`);
      }
    } else if (num % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        count = 0;
        console.log(`Congratulations, ${name}!`);
      }
    } else if (num % 2 === 0 && answer === 'no') {
      count = 0;
      if (answer === 'yes') {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      }
      console.log(`Let's try again, ${name}!`);
      loop = false;
    } else if (num % 2 !== 0 && answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      loop = false;
    } else if (answer !== 'yes' || answer !== 'no') {
      count = 0;
      if (answer === 'yes') {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      }
    }
  }
};

export { random, evenFunc };
