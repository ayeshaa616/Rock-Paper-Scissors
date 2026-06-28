// This will output directly to your browser's developer tools
console.log("Hello World");

const choice1 = 'Rock';
const choice2 = 'Paper';
const choice3 = 'Scissors';
const randomIndex = Math.floor(Math.random() * 3);

if(randomIndex === 0) {
    console.log(choice1);
} else if (randomIndex === 1) {
    console.log(choice2);
} else {
    console.log(choice3);
}
function getHumanChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?: ");
    let cleanInput = userInput.toLowerCase();
    if (cleanInput === 'rock') {
        console.log(choice1);
    } else if (cleanInput === 'paper') { 
        console.log(choice2);
    } else if (cleanInput === 'scissors') {
        console.log(choice3);
    } else {
        console.log('Error: Invalid choice! Please enter Rock, Paper, or Scissors');
    }
}
getHumanChoice();