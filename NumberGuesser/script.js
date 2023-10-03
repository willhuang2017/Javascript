let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.ceil(Math.random() * 9);
}

function compareGuesses(user, comp, target) {

  let userDif = Math.abs(user - target);
  let compDif = Math.abs(comp - target);

  if(userDif <= compDif){
    return true;
  }
  return false;
}

function updateScore(winner) {
  if(winner === 'human') {
    humanScore += 1;
  }
  computerScore += 1;
}

function advanceRound(){
  currentRoundNumber += 1;
}

console.log(compareGuesses(5,5,3));
