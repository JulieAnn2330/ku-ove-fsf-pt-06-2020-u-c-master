var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
   },
    {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: [
          'HTML',
          'CSS',
          'Java',
          'MySQL',
    ]},
    {
        type: 'list',        
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: [
         'phone',
         'email',
         'text',
         ],
        }])

  .then(function(data) {
      console.log(data);
var filename = data.name

fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("Success");
});
  });
