const min = 1;
const max = 100;
const randomNum = () => Math.floor(Math.random() * max + min);

const checkAnswer = (trueAnswer, userAnswer, name) => {
  if (trueAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

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

const gcd = (firstNum, secondNum) => {
  for (let i = max; i >= min; i--) {
    if (firstNum % i === 0 && secondNum % i === 0) return i
  }
}

export {
  checkAnswer, randomNum, randomSymbol, expression, gcd
};
