const readlineSync = require('readline-sync');

const username = readlineSync.question('what is your name?\n\n');

let welcomeMessage = `\n\nHi ${username} , Welcome to the MONEY HEIST QUIZ game \n\n ` ;

console.log(welcomeMessage);

console.log('You should be at least 15 years old to attend this Quiz\n\n\n');

const legalage = readlineSync.question('What is your age?\n\n');

if(legalage >= 15){
  console.log( `\nHey ${username}, Best of Luck\n\n`)
}else{
  console.log(`${username}, Watch Cartoon Network instread of Netflix`)
};

let score = 0;

const questionOne = readlineSync.question('Question --- 1   How much currency does the gang print at the Royal Mint?\n\n Choose an Option ---\n\n 1) 984 million euros  2) I forgot Calculation \n\n');

const optionOne = '1' ;

if (questionOne === optionOne){
  console.log('Your answer is correct')
  score = score +4 ;
  console.log(`Your score is : ${score}`)
}else{
  console.log('your answer is not correct')
  score = score-2;
  console.log(`Your score is : ${score}`)
}

const questionTwo = readlineSync.question('\n\nQuestion --- 2   The Professor’s first name is eventually revealed. What is it? \n\n \nChoose the correct Option ---\n\n 1) Nairobi   2) Sergio \n\n')

const optionTwo = '2' ;

if (questionTwo === optionTwo){
  console.log('your answer is correct\n\n')
  score = score +4;
  console.log(`Your score is : ${score}`)
}else{
  console.log('your answer is not correct')
  score = score-2;
  console.log(`Your score is : ${score}`)
}

const questionThree = readlineSync.question('\n\nQuestion --- 3  How many heists had Berlin pulled off before the event of “Money Heist” ? \n\n\n Choose the correct Option ---\n\n 1) 27 \n\n 2) 25 \n\n')

const optionThree = '1' ;

if (questionThree === optionThree){
  console.log('your answer is correct')
  score = score +4;
  console.log(`Your score is : ${score}`)
}else{
  console.log('your answer is not correct')
  score = score-2;
  console.log(`Your Final score is : ${score}`)
}

let highscore = 10;

if( score>highscore){
  highscore = score;
  console.log(
    `Hey ${username} you are highest scorer`
  )
  console.log(`New High Score is : ${highscore}`)
}else{
  console.log(`Highest Score : ${highscore} \n\n Try again to become highest scorer`)
}