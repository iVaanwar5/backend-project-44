import getRandomIntInclusive from '../util.js';
import gameOne from '../index.js';

const answerTwo = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameFinal = (itumf) => {
  for (let i = 2; i < itumf; i += 1) 
    if (itumf % i === 0) return false;

  return itumf > 1;
};

const gamePrimem = () => {
  const itumf = getRandomIntInclusive(2, 100);
  const topp = gameFinal(itumf) ? 'yes' : 'no';
  return [itumf, topp];
};
const gameFin = () => {
  gameOne(answerTwo, gamePrimem);
};
export default gameFin;
