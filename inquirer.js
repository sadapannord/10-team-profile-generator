const inquirer = require('inquirer');
const fs = require('fs');
const allEmployees =[];
const questions = [
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
        name: 'moreEmployees',
        choices: ["Yes", "No"]
    }]
const additionalEmployees = [
    {
        type: 'input',
        message: "What is the employee's name?",
        name: 'employeeName',
    },
    {
        type: 'list',
        message: "What is the employee's role?",
        name: 'role',
        choices: ['Engineer', 'Intern'],
    },
    {
        type: 'input',
        message: "What is the employee's ID?",
        name: 'employeeId',
    },
    {
        type: 'input',
        message: "What is the employee's email?",
        name: 'employeeEmail',

    },
    {
        type: 'input',
        message: "What is the Engineer's GitHub repo?",
        name: 'gitHub',
        when: (answers) => {
            if (answers.role === 'Engineer') {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "What is the Intern's school?",
        name: 'school',
        when: (answers) => {
            if (answers.role === 'Intern') {
                return true;
            }
        }
    },
    {
        type: 'list',
        message: 'Do you have more employees to add?',
        name: 'moreEmployees',
        choices: ["Yes", "No"]
    }
]

function getEmployees() {
    inquirer.prompt(questions).then((answers => {
        allEmployees.push(answers)
        console.log(allEmployees);
        if (!answers.moreEmployees) {
            return answers;
        } else {
            return getMoreEmployees()
        }

    }))
}

function getMoreEmployees() {
    inquirer.prompt(additionalEmployees).then ((answers => {
        allEmployees.push(answers);
        console.log(allEmployees);
        if(answers.moreEmployees=== "No") {
            return answers;
        } else {
            return getMoreEmployees()
        }
    }))
}


getEmployees()


//  .then((data) => {
//     console.log(data)
//     // fs.writeFile()
//     data = JSON.stringify(data)
//     fs.writeFile('./output', data, (err) =>//err is just placeholder, put in anything? Happy
//   err ? console.error(err) : console.log('Success!')
// );
//  })

// console.log(answers)
