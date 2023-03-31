import readlineSync from 'readline-sync'
let countRounds = 3;
 const gameOne = (answer, raynt) =>{
    console.log('Welcome to the brain games!');
    const username = readlineSync.question('May I have your name? ');
    console.log('Hello, '+ username + "!");
    console.log(answer);
    for (let i = 0; i < countRounds; i +=1) {
        const [vopros, corrAnswer] = raynt();
        console.log(`Question: ${vopros}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (corrAnswer !== userAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corrAnswer}'.`);
            console.log(`Let's try again, ${username}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${username}!`);

 };
 export default gameOne;