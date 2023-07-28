const readline = require('readline').createInterface ({
    input: process.stdin,
  output: process.stdout,
});


console.log('Hello! Welcome to roll a dice!')
playGame()

function computer() {
    return Math.floor(Math.random() * 6) + 1;
}

function user() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame () {
    readline.question('Ready? y/n: ', (answer) => {
        const computerChoice = computer();
        const userChoice = user();
        
        if (answer.toLocaleLowerCase() === 'y') {
            console.log(`Computer rolled a ${computerChoice}!`),
            console.log(`You rolled a ${userChoice}!`)

            if (computerChoice === userChoice) {
                result = "It's a draw."
                scoresDraws++;
            } else if (computerChoice < userChoice) {
                result = "You win!"
                scoresWins++;
            } else if (computerChoice > userChoice) {
                result = "Computer wins!"
                scoresLoses++;    
            }
            
            console.log('Current scores user wins ' + scoresWins + ', user loses ' + scoresLoses + ', draws ' + scoresDraws);
            playAgain()
            } else if (answer.toLocaleLowerCase() === 'n') {
                readline.close();
                console.log('Thanks for playing!');
            } else {
                console.log('Invalid input. Please try again.');
                playGame();
        }
    })  
}

let scoresWins = 0;
let scoresLoses = 0;
let scoresDraws = 0;

function continueGame (answer) {
    const computerChoice = computer();
    const userChoice = user();
        
        if (answer.toLocaleLowerCase() === 'y') {
            console.log(`Computer rolled a ${computerChoice}!`),
            console.log(`You rolled a ${userChoice}!`)

            if (computerChoice === userChoice) {
                result = "It's a draw."
                scoresDraws++;
            } else if (computerChoice < userChoice) {
                result = "You win!"
                scoresWins++;
            } else if (computerChoice > userChoice) {
                result = "Computer wins!"
                scoresLoses++;    
            }
            
            console.log('Current scores user wins ' + scoresWins + ', user loses ' + scoresLoses + ', draws ' + scoresDraws);
            playAgain()
}}

function playAgain() {
    readline.question('Play again? (y/n): ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        continueGame(answer);
      } else if (answer.toLowerCase() === 'n') {
        readline.close();
        console.log('Thanks for playing!');
      } else {
        console.log('Invalid input. Please try again.');
        playAgain();
      }
    });
  }

// while (start === "y") {
//     //computer random number
//     let computer = Math.floor(Math.random() * 6) + 1;

//     //user random number
//     let user = Math.floor(Math.random() * 6) + 1;
//     prompt(`Computer rolls ${computer}. You roll ${user} `)
//     //who wins
//     //let result
//     //let scores = {"wins": 0, "loses": 0, "draws": 0};
//     if (computer === user) {
//         result = "It's a draw."
//         scoresdraws++;
//     } else if (computer < user) {
//         result = "You win!"
//         scoreswins++;
//     } else if (computer > user) {
//         result = "Computer wins!"
//         scoresloses++;
//     }
//     console.log('Current scores user wins ' + scoreswins + 'user loses ' + scoresloses + 'draws ' + scoresdraws);
// }

// let scoreswins = 0;
// let scoresloses = 0;
// let scoresdraws = 0;