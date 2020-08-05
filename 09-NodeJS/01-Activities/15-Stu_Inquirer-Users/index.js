var inquirer = require("inquirer");

inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
   },
    {
        type: 'checkbox',
        message: 'select languages',
        name: 'stack',
        choices: [
          'HTML',
          'CSS',
          'Java',
          'MySQL',
    ]},
    {
        type: 'list',        
        message: 'Select communicaton method',
        name: 'communication',
        choices: [
         'phone',
         'email',
         'text',
         ],
        }])

  .then(function(data) {
      console.log(data);
var filename = data.name.toLowerCase().split(' ').join('') + '.json';

fs .writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("Success");
});
  });
