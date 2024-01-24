/**
 * Returns the computer's choice
 *
 * @param {Array} options - The list of options.
 * @returns {string} The computer's choice.
 */
function getComputerChoice(options) {
  let randomNumber = Math.round(Math.random() * 2);
  return options[randomNumber];
}

/**
 * Returns the user's choice
 *
 * @param {Array} options - The list of options.
 * @returns {string} The user's choice.
 */
function getUserChoice(options) {
  let choice;
  do {
    choice = prompt(
      "Please select an option (enter number):\n1 - Rock\n2 - Paper\n3 - Scissors"
    );
  } while (choice <= 0 || choice >= 4);
  return options[choice - 1];
}

/**
 * Plays a round of Rock, Paper, Scissors and returns the result.
 *
 * @param {string} playerSelection - The player's chosen option for the round.
 * @param {string} computerSelection  - The computer's chosen option for the round.
 * @returns {string} The result of the round.
 */
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log("You win! " + playerSelection + " beats " + computerSelection);
    return "User";
  } else {
    console.log("You lose! " + computerSelection + " beats " + playerSelection);
    return "CPU";
  }
}

/**
 * Plays a game of Rock, Paper, Scissors with multiple rounds until a winner is determined.
 * This is determined by winning 5 rounds.
 */
function game() {
  const options = ["rock", "paper", "scissors"];
  let userScore, computerScore;
  userScore = computerScore = 0;

  do {
    const playerSelection = getUserChoice(options);
    const computerSelection = getComputerChoice(options);

    // may need to come back to this and the playRound() function to simplify
    let result = playRound(playerSelection, computerSelection);
    if (result == "User") {
      userScore++;
    } else if (result == "CPU") {
      computerScore++;
    }

    console.log(
      "The current score is: User (You) - " +
        userScore +
        " / CPU - " +
        computerScore
    );
  } while (userScore != 5 && computerScore != 5);

  if (userScore == 5) {
    console.log("You are the winner!");
  } else if (computerScore == 5) {
    console.log("CPU is the winner!");
  }
}

game();
