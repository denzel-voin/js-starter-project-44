import readlineSync from 'readline-sync';

const random = () => Math.floor(Math.random() * 100 + 1);

const evenFunc = (randomNum, name) => {
  let count = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (name) {
    const num = randomNum();
    const answer = readlineSync.question(`Question: ${num} \n`);
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        count = 0;
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      count = 0;
      const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export { random, evenFunc };
