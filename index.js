const fs = require('fs');

const generateHTML = (allEmployees) => {
    let employeeHtml = "";
    for (i = 0; i < allEmployees.length; i++) {
        let employee = allEmployees[i]
        console.log(employee)
        if (employee.getRole() === "Manager") {
        employeeHtml += `<div class="container card center-align col l3"><li id="Manager" class = "pink lighten-4">${employee.name} 
        <li>Role: Manager</li>
        <li>ID: ${employee.id}</li>
        <li>Email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
        <li>Office Number: ${employee.officeNumber}</li>
    </li></div>`
        }
        else if (employee.getRole() === "Engineer") {
        employeeHtml += `<div class="container card center-align col l3"><li class = "Engineer pink lighten-4">${employee.name}
        <li>Role: Engineer</li>
        <li>ID: ${employee.id}</li>
        <li>Email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
        <li>GitHub: <a href="${employee.gitHub}">${employee.gitHub}</a></li>
    </li></div>`
        }
        else if (employee.getRole() === "Intern") {
        employeeHtml += `<div class="container card center-align col l3"><li class = "Intern pink lighten-4">${employee.name}
        <li>Role: Intern</li>
            <li>ID: ${employee.id}</li>
            <li>Email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
            <li>School: ${employee.school}</li>
        </li></div>`
        }

    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <link rel="stylesheet" href="../style.css" />
      <title>Document</title>
    </head>
    
    <body>
      <header class="p-5 mb-4 header teal lighten-2">
        <div>
          <h1 class="display-4 center-align">My Team</h1>
        </div>
      </header>
      <ul class="container employees row">
        ${employeeHtml}
      </ul>
    </body>
    
    </html>`;
}
module.exports = generateHTML;
