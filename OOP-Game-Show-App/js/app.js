let game;
let buttonReset = document.querySelector("button#btn__reset");
buttonReset.addEventListener("click", (e) => {
  game = new Game();
  game.resetGame();
  game.startGame();
});

const keyboardButtons = document.getElementById("qwerty");

keyboardButtons.addEventListener("click", (key) => {
  const buttonSelected = key.target;
  if (buttonSelected.className === "key") {
    game.handleInteraction(key.target);
  }
});