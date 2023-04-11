import getRandomIntInclusive from '../util.js';
import gameOne from '../index.js';

const expression = 'What is the result of the expression?';
const signy = ['+', '-', '*'];
const calc = (randomsOne, randomsTwo, operator) => {
  let correctAnswer = 0;
  switch (operator) {
    case '+':
      correctAnswer = randomsOne + randomsTwo;
      return correctAnswer;
    case '-':
      correctAnswer = randomsOne - randomsTwo;
      return correctAnswer;
    case '*':
      correctAnswer = randomsOne * randomsTwo;
      return correctAnswer;
    default:
      break;
  }
  return correctAnswer;
};
const Primer = () => {
  const randomsOne = getRandomIntInclusive(1, 100);
  const randomsTwo = getRandomIntInclusive(1, 100);
  const operator = signy[getRandomIntInclusive(0, (signy.length) - 1)];
  const question = `${randomsOne} ${operator} ${randomsTwo}`;
  const correctAnswer = String(calc(randomsOne, randomsTwo, operator));
  return [question, correctAnswer];
};
const calcGames = () => {
  gameOne(expression, Primer);
};

export default calcGames;
