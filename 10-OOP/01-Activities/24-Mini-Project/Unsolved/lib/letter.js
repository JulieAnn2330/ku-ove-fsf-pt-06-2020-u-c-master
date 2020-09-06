class Letter {
    constructor(letter) {
        this.letter = letter;
        if(letter.match(/[a-zA-Z]/i)) {
            this.visible = false;
        } else {
            this.visible = true;
        }
    }

    toString() {
        if(this.visible) {
            return this.letter
        } else  {
            return  '_'
        }
    }

    guess (g) {
        if (g.toLowerCase() === this.letter.toLowerCase()) {
            this.visible = true
            return true
        } else {
            return false
        }
    }

    getSolution() {
        return this.letter
    }
}

module.exports = Letter