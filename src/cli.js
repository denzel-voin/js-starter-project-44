import readlineSync from 'readline-sync';

const name = () => {
  const answer = readlineSync.question('May I have your name? ');
  return answer;
};

export default name;
