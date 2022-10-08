class Game {
    constructor() {
      this.missed = 0;
      this.phrases = this.createPhrases();
      this.activePhrase = null;
    }
    
    createPhrases() {
      const phrases = [
        new Phrase("Life is like a box of chocolates"),
        new Phrase("There is no trying"),
        new Phrase("May the force be with you"),
        new Phrase("Be kind"),
        new Phrase("Dream big"),
        new Phrase("Trust the timing of your life"),
        new Phrase("Turn your wounds into wisdom"),
        new Phrase("Your patience is your power"),
        new Phrase("Choose to shine"),
        new Phrase("Life is too short for bad vibes"),
        new Phrase("Everyday is a new day"),
        new Phrase("The only way out is through"),
        new Phrase("All we have is now"),
        new Phrase("Never stop learning"),
        new Phrase("Be the reason someone smiled today")
      ];
      return phrases;
    }
  
    getRandomPhrase() {
      let randomPhrase = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[randomPhrase];
    }
    
    startGame() {
      document.querySelector("div#overlay").style.display = "none";
      this.getRandomPhrase();
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
    }
  
    checkForWin() {
      const letterLeft = document.querySelectorAll(".hide");
      if (letterLeft.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    
    removeLife() {
      this.missed++;
      let lives = document.querySelector(".tries");
      let heart = lives.firstChild;
      lives.classList.remove("tries");
      heart.src = "images/lostHeart.png";
      if (this.missed === 5) {
        this.gameOver();
      }
    }
  
    gameOver(gameWon) {
      const overLay = document.getElementById("overlay");
      overLay.style.display = "";
      overLay.style.opacity = 1;
      const gameOverMessage = document.getElementById("game-over-message");
      if (gameWon) {
        overLay.className = "win";
        gameOverMessage.textContent = "Congratulations !! You won the game.";
      } else {
        overLay.className = "lose";
        gameOverMessage.textContent = "Sorry... Try again.";
      }
    }
    
    handleInteraction(button) {
      console.log(button);
      button.disabled = true;
      const chosenLetter = this.activePhrase.checkLetter(button.textContent);
      if (!chosenLetter) {
        button.classList.add("wrong");
        this.removeLife();
      } else {
        button.classList.add("chosen");
        this.activePhrase.showMatchedLetter(button.textContent);
        if (this.checkForWin()) {
          this.gameOver(true);
        }
      }
    }
    
    resetGame() {
      const ul = document.querySelector("#phrase ul");
      ul.innerHTML = "";
      const keys = document.querySelectorAll(".key");
      for (let i = 0; i < keys.length; i++) {
        keys[i].disabled = false;
        keys[i].classList.remove("chosen", "wrong");
      }
      const hearts = document.querySelectorAll("#scoreboard ol li");
      for (let i = 0; i < hearts.length; i++) {
        if (hearts[i].classList != "tries") {
          hearts[i].classList.add("tries");
          hearts[i].firstChild.src = "images/liveHeart.png";
        }
      }
    }
  }