import getRandomIntInclusive from '../util.js';
import gameOne from '../index.js';

const progression = 'What number is missing in the progression?';

const numberOfBigits = 10;
const getRandomProgression = () => {
  const result = [];
  const step = getRandomIntInclusive(1, 15);
  const startNum = getRandomIntInclusive(1, 80);
  for (let i = 0; i < numberOfBigits; i += 1) {
    result.push(startNum + i * step);
  }
  const hiddenNumindex = getRandomIntInclusive(0, 9);
  const rightAnswer = result[hiddenNumindex];
  result[hiddenNumindex] = '..';
  const question = result.join(' ');
  return [question, rightAnswer];
};

const play4 = () => {
  gameOne(progression, getRandomProgression);
};
export default play4;
