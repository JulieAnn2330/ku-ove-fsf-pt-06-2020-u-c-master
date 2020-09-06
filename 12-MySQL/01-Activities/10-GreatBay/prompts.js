const inquirer = require('inquirer');
const mysql = require('mysql');
const fs = require('fs');
const util = require('util')

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
return inquirer.prompt([
        {
            type: 'list',
            name: "action",
            message: 'What do you want to do?',
            choices: [
                "Bid on an Item",
                "Sell an item",
             ]},
            ])
        
            
        .then((answers) => {
        action = answers.action
        });
    }

        switch(action) {
            case "Sell an Item":
                inquirer.prompt([
          {
          type: 'input',
          name: 'item',
          message: 'What item do you want to sell?',
          },
          {
            type: 'input',
            name: 'item_price',
            message: 'How much do you want to sell it for?',
            },
            {type: 'input',
            name: 'item_quantity',
            message: 'How many items do you have to sell?',
            },
            {type: 'input',
            name: 'item_category',
            message: 'What category is your item in?',
            }
        ]);
    }    

// function to initialize program
async function init() {
    try {
         const answers = await promptUser();

         const readMe = generateREADME(answers);

         await writeFileAsync('README.md', readMe);
         console.log('Successfully written to README.md');
         
    } catch (err) {
         console.log(err);
    }
}

// function call to initialize program
init(); 