class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const charArray = this.phrase.split('');
    
        charArray.forEach(character => {
            const ul = document.querySelector('ul');
            const li = document.createElement('li');
            li.textContent = character;
    
            if (character === ' ') {
                li.classList.add('space');
            } else {
                li.classList.add('letter');
                li.classList.add('hide');
                li.classList.add(character);
            }
            ul.appendChild(li);
        });
    }

    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            return true; 
        } else {
            return false; 
        }
    }

    showMatchedLetter(letter) {
        const displayLetter = document.getElementsByClassName('letter');
        if (this.checkLetter(letter)) {
            for (let i = 0; i < displayLetter.length; i++) {
                if (displayLetter[i].classList.contains(letter)) {
                displayLetter[i].classList.remove('hide');
                displayLetter[i].classList.add('show');
                }
            }
        }
    }
}
