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
        type: 'list',
      message: 'Do you have more employees to add?',
      name: 'yesNo',
      choices: ["Yes", "No"]
    },
    {
        type: 'list',
      message: "What is the employee's role?",
      name: 'role',
      choices: ['Engineer','Intern'],
      when: (answers) => {
        if(answers.yesNo === 'Yes') {
        return true;
        }
    }
    },
    {
        type: 'input',
      message: "What is the employee's name?",
      name: 'engineerName',
      when: (answers) => { 
        if(answers.role === 'Engineer' || 'Intern'){
            return true;
        }
      }
    },
    {
        type: 'input',
      message: "What is the employee's ID?",
      name: 'engineerId',
      when: (answers) => { 
        if(answers.role === 'Engineer' || 'Intern'){
            return true;
        }
      }
    },
    {
        type: 'input',
      message: "What is the employee's email?",
      name: 'engineerEmail',
      when: (answers) => { 
        if(answers.role === 'Engineer' || 'Intern'){
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
      message: "What is the Intern's school?",
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
