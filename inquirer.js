const inquirer = require ('inquirer');
const fs = require ('fs');
inquirer.prompt ([
    {
        type: 'input',
      message: "What is the Managers's name?",
      name: 'managerName',
    },
    {
        type: 'input',
      message: "What is the Manager's employee ID?",
      name: 'managerId',
    },
    {
        type: 'input',
      message: "What is the Manager's email?",
      name: 'managerEmail',
    },
    {
        type: 'input',
      message: "What is the Manager's office number?",
      name: 'officeNumber',
    },
    {
        type: 'confirm',
      message: 'Do you have more employees to add?',
      name: 'confirm',
    },
    {
        type: 'list',
      message: "What is the employee's role?",
      name: 'role',
      choices: ['Engineer','Intern'],
      when: (answers) => {
        if(answers.confirm === 'Y') {
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
 ])
 .then((data) => {
    // fs.writeFile()
    fs.writeFile('./output', data, (err) =>//err is just placeholder, put in anything? Happy
  err ? console.error(err) : console.log('Success!')
);
 })

// console.log(answers)
//add if statement that reasks questions if yesNo is selected Yes