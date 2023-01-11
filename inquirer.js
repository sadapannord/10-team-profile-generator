const inquirer = require ('inquirer');
const fs = require ('fs');
inquirer.prompt ([
    {
        type: 'input',
      message: "What is the employee's name?",
      name: 'name',
    },
    {
        type: 'list',
      message: "What is the employee's role?",
      name: 'role',
      choices: ['Employee', 'Manager', 'Engineer','Intern']
    },
    {
        type: 'input',
      message: "What is the Manager's office number?",
      name: 'officeNumber',
      when: (answers) => { 
        if(answers.role === 'Manager'){
            return true;
        }
      }
    },
    {
        type: 'input',
      message: "What is the Engineer's GitHub repo?",
      name: 'gitHub',
      when: (answers) => { 
        if(answers.role === 'Engineer'){
            return true;
        }
      }
    },
    {
        type: 'input',
      message: "What is the Intern's?",
      name: 'school',
      when: (answers) => { 
        if(answers.role === 'Intern'){
            return true;
        }
      }
    },
    {
        type: 'input',
      message: "What is the employee's ID?",
      name: 'id',
    },
    {
        type: 'input',
      message: "What is the employee's email?",
      name: 'email',
    },
    {
        type: 'confirm',
      message: 'Do you have more employees to add?',
      name: 'yesNo',
    },
 ])
 .then((data) => {
    // fs.writeFile()
    fs.writeFile('./output', data, (err) =>//err is just placeholder, put in anything? Happy
  err ? console.error(err) : console.log('Success!')
);
 })

// console.log(answers)
//add if statement that reasks questions if yesNo is selected Yes