import readlineSync from 'readline-sync';

const test = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question(' May I have your name? ');
  console.log(`Hello, ${username}!`);
};
export default test;
