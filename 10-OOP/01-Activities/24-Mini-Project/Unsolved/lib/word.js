const Letter = require("./letter")

class Word {
consturctor (word) {
    this.word = word
    this.letters = []

    word.split('').forEach(letter => {
        this.letters.push(new Letter(letter))
    })
}

guessLetter(g) {
    var foundLetter = false

    this.letters.forEach(l => {
        var goodGuess = l.guess(g)
        if (goodGuess) {
            foundLetter = true
        }
    })

    return foundLetter
   
}

    guessedCorrectly() {
        return this.letters.every(l => l.visible)
 }

  showWord() {
      this.letters.forEach(l => {
          console.log(l.toString)
      })
  }
}

module.exports = Word