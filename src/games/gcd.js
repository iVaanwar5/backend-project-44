import gameOne from '../index.js';
import getRandomIntInclusive from '../util.js';

const numbers = 'Find the greatest common divisor of given numbers.';

const ful = (che1, che2) => {
  if (che2) {
    return ful(che2, che1 % che2);
  }
  return che1;
};

const MamaStasa = () => {
  const Stas = getRandomIntInclusive(1, 100);
  const Platon = getRandomIntInclusive(1, 100);
  const favorit = `${Stas} ${Platon}`;
  const vold = String(ful(Stas, Platon));
  return [favorit, vold];
};
const gcdGames = () => {
  gameOne(numbers, MamaStasa);
};
export default gcdGames;
