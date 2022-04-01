let letsPlay = document.querySelector(".btn");
let match = document.querySelector(".match");
let intro = document.querySelector(".intro");
let option = document.querySelectorAll(".opt");
let userChoice = document.querySelector(".computer-hand");
let computerChoice = document.querySelector(".player-hand");
let computer = document.querySelector(".computer-point");
let player = document.querySelector(".player-point");
let hands = document.querySelector(".hands");
let winnerText = document.querySelector(".winner");

letsPlay.addEventListener("click", function () {
  console.log("btn clicked");
  intro.classList.add("fadeOut");
  // match.classList.remove("fadeOut");
  match.classList.add("fadeIn");
});

//logic
const arr = ["rock", "paper", "scissors"];
let score = [0, 0];

console.log(option.length);
//generating random number==>
function randomNumber() {
  let random = Math.trunc(Math.random() * 3);
  return random;
}

for (let i = 0; i < option.length; i++) {
  option[i].addEventListener("click", function () {
    //game begins
    const userValue = option[i].textContent;
    console.log(userValue);
    const hands = document.querySelectorAll(".hands img");

    for (let i = 0; i < hands.length; i++) {
      function userHand(hand) {
        hand.addEventListener("animationend", function () {
          hand.style.animation = "";
        });
      }
      userHand(hands[i]);
    }
    //timeout function for animation delay and score update
    setTimeout(() => {
      if (arr.includes(userValue)) {
        console.log(arr.indexOf(userValue));
        let userChoiceRPS = arr.indexOf(userValue);
        userChoice.src = `./assets/${userValue}.png`;
        let computerChoiceRPS = randomNumber();
        let computerValue = arr[computerChoiceRPS];
        console.log(userChoiceRPS, computerChoiceRPS);
        computerChoice.src = `./assets/${computerValue}.png`;
        //game logic
        console.log(userValue, computerValue);
        GameBegin(userValue, computerValue);
      }
    }, 2000);
    userChoice.style.animation = "shakeComputer 2s ease";
    computerChoice.style.animation = "shakePlayer 2s ease";
  });
}

//logic==>

const GameBegin = (userValue, computerValue) => {
  if (userValue === "rock" && computerValue === "paper") {
    console.log("computer wins");
    score[0] += 1;
    winnerText.textContent = `Computer Wins!`;
    computer.textContent = score[0];
  } else if (userValue == "rock" && computerValue == "scissors") {
    console.log("user wins");
    winnerText.textContent = `Player Wins!`;
    score[1] += 1;
    player.textContent = score[1];
  } else if (userValue == "paper" && computerValue == "rock") {
    console.log("Player Wins");
    winnerText.textContent = `Player Wins!`;
    score[1] += 1;
    player.textContent = score[1];
  } else if (userValue == "paper" && computerValue == "scissors") {
    console.log("computer wins");
    winnerText.textContent = `Computer Wins!`;
    score[0] += 1;
    computer.textContent = score[0];
  } else if (userValue == "scissors" && computerValue == "rock") {
    console.log("computer wins");
    winnerText.textContent = `Computer Wins!`;
    score[0] += 1;
    computer.textContent = score[0];
  } else if (userValue == "scissors" && computerValue == "paper") {
    console.log("user wins");
    winnerText.textContent = `Player Wins!`;
    score[1] += 1;
    player.textContent = score[1];
  } else {
    console.log("draw");
    winnerText.textContent = `It is a tie!`;
  }
};
