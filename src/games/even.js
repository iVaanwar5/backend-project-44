import { getRandomIntInclusive } from "../util.js";
import gameOne from "../index.js";
const answer = "Answer 'yes' if the number is even, otherwise answer 'no'." ;
const isEven = (num) => num % 2 === 0;

const evenLogic = () => {
    const question = getRandomIntInclusive(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
};
const evenGame = () =>{
    gameOne(answer, evenLogic)
}
export default evenGame;