const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
return inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
    },
    {
    type: 'input',
    name: 'location', 
    message: 'Where are you from?'
    },
    {
    type: 'input',
    name: 'bio',
    message: 'Tell me a little about yourself.'
    },
    {
    type: 'input',
    name: 'linkedIn',
    message: 'What is your linked in profile?'
    },
    {
    type: 'input',
    name: 'git',
    message: 'What is your GitHub username?'
    }
   ])
}

function generateHTML(answers) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"></link>
    <title>Document</title>
</head>
<body>
    <h1>About Me</h1>
    <br><br>
    <h2>My name is ${ answers.name } and I am located in ${ answers.location }</h2>
    <br><br>
    <h1>Bio Section</h1>
    <h3>${ answers.bio }</h3><br>
    <h3>My linkedIn profile can be found at ${ answers.linkedIn } and my GitHub profile can be found at ${answers.git }.
    </h3>
</body>
</html>`
}

async function init() {
console.log('hi') 
try {
    const answers = await promptUser();

    const html = generateHTML(answers);

await writeFileAsync('index.html', html);

console.log('successfully written to index.html')

} catch (err) {
    console.log(err);
  }
}

init()