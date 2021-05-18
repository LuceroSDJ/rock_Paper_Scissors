//create global variables 
var wins = 0,
    losses = 0,
    ties = 0;
//store users input onkeyup
document.onkeyup = function(event) {
    var userGuess = event.key.toLocaleLowerCase();
    console.log(userGuess);




//have the computer choose a random index number form options array   
 var options = ['r', 'p', 's'];

 var computerGuess = options[Math.floor(Math.random() * options.length)];


//create conditional statements to process user input and computer input
if((userGuess === 'r') || (userGuess === 'p') || (userGuess === 's')) {
    //conditional statements to determing wins
    if((userGuess === 'r') && (computerGuess === 's')) {
        wins++;
    } else if((userGuess === 'p') && (computerGuess === 'r')) {
    wins++;
    } else if((userGuess === 's') && (computerGuess === 'p')) {
    wins++;
    } else if((userGuess === 's') && (computerGuess === 'r')) {
    losses++;
    } else if((userGuess === 'r') && (computerGuess === 'p')) {
    losses++;
    } else if((userGuess === 'p') && (computerGuess === 's')) {
    losses++;
    } else if((userGuess === 'r') && (computerGuess === 'r')) {
    ties++;
    } else if((userGuess === 'p') && (computerGuess === 'p')) {
        ties++;
    } else if((userGuess === 's') && (computerGuess === 's')) {
        ties++;
     }
} else {
    alert("Please enter a valid input");
}; 


//display output
var output = 
    '<p>You choose: ' + userGuess + '</p>' +
    '<p>The computer choose: ' + computerGuess + '</p>' +
    '<p>Wins: ' + wins + '</p>' +
    '<p>Losses: ' + losses + '</p>' +
    '<p>Ties: ' + ties + '</p>';


document.getElementById('game').innerHTML = output;
}