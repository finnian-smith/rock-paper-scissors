const options = ["rock", "paper", "scissors"];

let userScore, computerScore;
userScore = computerScore = 0;
let gameActive = true;

const container = document.querySelector(".container");
const details = document.querySelector(".game-details");
const result = document.createElement("div");
const score = document.createElement("div");
const winner = document.createElement("div");
const playAgainButton = document.createElement("button");

playAgainButton.textContent = "Play Again";
playAgainButton.addEventListener("click", resetGame);

/**
 * Starts the game of Rock, Paper, Scissors.
 */
function playButtonClick() {
  if (gameActive) {
    const userChoice = this.value;
    playRound(userChoice);
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", playButtonClick);
});

/**
 * Returns the computer's choice for the game.
 *
 * @param {string[]} options - The list of available options.
 * @returns {string} The computer's choice.
 */
function getComputerChoice(options) {
  let randomNumber = Math.round(Math.random() * 2);
  return options[randomNumber];
}

/**
 * Plays a round of Rock, Paper, Scissors and updates the game state.
 *
 * @param {number} userChoice - The user's choice (index of the option).
 */
function playRound(userChoice) {
  let playerSelection = options[userChoice];
  let computerSelection = getComputerChoice(options);

  if (playerSelection == computerSelection) {
    result.textContent = "It's a tie!";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    result.textContent =
      "You win! " + playerSelection + " beats " + computerSelection;
    userScore++;
  } else {
    result.textContent =
      "You lose! " + computerSelection + " beats " + playerSelection;
    computerScore++;
  }

  container.appendChild(details);
  score.textContent =
    "User Score: " + userScore + " / Computer Score: " + computerScore;
  details.appendChild(result);
  details.appendChild(score);

  checkWinner();
}

/**
 * Checks for a winner and displays the result.
 * If there is a winner, it provides the option to play again.
 */
function checkWinner() {
  if (userScore == 5 || computerScore == 5) {
    winner.textContent =
      userScore == 5 ? "You are the winner!" : "CPU is the winner!";
    details.appendChild(winner);

    // play again option
    playAgainButton.style.display = "block";
    details.appendChild(playAgainButton);
    gameActive = false;
  }
}

/**
 * If the player wishes to play again, the game is reset.
 */
function resetGame() {
  // reset scores and clears the result display
  userScore = computerScore = 0;
  result.textContent = "";
  score.textContent = "";
  winner.textContent = "";

  playAgainButton.style.display = "none";
  gameActive = true;

  // remove existing event listeners and reattach
  buttons.forEach((button) => {
    button.removeEventListener("click", playButtonClick);
    button.addEventListener("click", playButtonClick);
  });
}
