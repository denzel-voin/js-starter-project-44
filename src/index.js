const randomNum = (min, max) => Math.floor(Math.random() * max + min);

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
  for (let i = 100; i >= 1; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) return i;
  }
  return null;
};

const minLength = 4;
const maxLength = 9;

const randomArray = () => {
  const arrNums = [];
  const arrLength = randomNum(minLength, maxLength);
  const step = randomNum(1, 10);
  let d = randomNum(1, 10);
  for (let i = 0; i < arrLength; i += 1) {
    arrNums.push(d += step);
  }
  return arrNums;
};

export {
  checkAnswer, randomNum, randomSymbol, expression, gcd, randomArray,
};
