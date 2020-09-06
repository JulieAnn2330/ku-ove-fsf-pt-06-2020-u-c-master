const Word = require('./lib/word')
const words = require('./lib/word')
const inquirer = require('inquirer')

const wordInstance = new Word("help")
var guessesLeft = 10

async function getGuessLetter() {
    return await inquirer.prompt(['Guess a letter?'])
}
while (!wordInstance.guessedCorrelty() && guessesLeft > 0) {
    wordInstance.showWord()
    getGuessLetter()

    }


