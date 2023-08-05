const compareDices = () => {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1; // creates random number between 1 and 6
  let randomDiceImage1 = "dice" + randomNumber1 + ".png"; // creates image path for number1
  let randomImageSource1 = "images/" + randomDiceImage1; // creates image source path for number1
  let image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource1); // sets image to related random number1

  let randomNumber2 = Math.floor(Math.random() * 6) + 1; // creates random number between 1 and 6
  let randomDiceImage2 = "dice" + randomNumber2 + ".png"; // creates image path for number2
  let randomImageSource2 = "images/" + randomDiceImage2; // creates image source path for number2
  let image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2); // sets image to related random number2

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  } // which dice is bigger than other dice it shows up
};

const resetDices = () => {
  document.querySelector("h1").innerHTML = "Dices are resetted";
  let resetDice1 = document.querySelectorAll("img")[0];
  let resetDiceSource1 = "images/empty-dice.png";
  resetDice1.setAttribute("src", resetDiceSource1);

  let resetDice2 = document.querySelectorAll("img")[1];
  let resetDiceSource2 = "images/empty-dice.png";
  resetDice2.setAttribute("src", resetDiceSource2);
};
