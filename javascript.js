// alert("working!");


let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// Random number between 1 and 6, rounded up to nearest number. To check in console type "Math.random()"

let randomDiceImage = "dice" + randomNumber1 + ".png";
// Select random image between dice1.png and dice6.png using concatination

let randomImageSource = "images/" + randomDiceImage;
// Images/dice1.png -Images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  