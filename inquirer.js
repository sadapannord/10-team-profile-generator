const inquirer = require('inquirer');
const fs = require('fs');
const allEmployees = [];
const index = require('./index.js')
const Manager = require ('./lib/Manager.js')
const Engineer = require ('./lib/Engineer.js')
const Intern = require ('./lib/Intern.js')



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
        let manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)
        allEmployees.push(manager)
        if (!answers.moreEmployees) {
            return answers;
        } else {
            return getMoreEmployees()
        }

    }))
}

function getMoreEmployees() {
    inquirer.prompt(additionalEmployees).then((answers => {
        if (answers.role === "Engineer") {
            let engineer = new Engineer (answers.employeeName, answers.employeeId, answers.employeeEmail, answers.gitHub)
            allEmployees.push(engineer)
        }
        if (answers.role === "Intern") {
            let intern = new Intern (answers.employeeName, answers.employeeId, answers.employeeEmail,answers.school)
            allEmployees.push(intern)
        }
        if (answers.moreEmployees === "No") {
            fs.writeFileSync('./output/index.html', index(allEmployees))
        } else {
            return getMoreEmployees()
        }

    }))
}


getEmployees()
    //this next part broke my inquirer
    // .then((allEmployees) => {
    //     fs.writeFile('./output/index.html', index(allEmployees))
    // })






