const randomNum = () => Math.floor(Math.random() * 100 + 1);

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

export {
  checkAnswer, randomNum, randomSymbol, expression,
};
