const fs = require('fs');

const generateHTML = ({ name, id, email, role, officeNumber, gitHub, school }) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <header class="p-5 mb-4 header bg-light">
      <div class="container">
        <h1 class="display-4">My Team</h1>
        <ul class = "employees">
          <li id="manager" class = "containter"> ${name} 
              <li>${id}</li>
              <li>${email}</li>
              <li>${role}</li>
              <li>${officeNumber}</li>
          </li>
          <li class = "engineer containter"> ${name}
              <li>${id}</li>
              <li>${email}</li>
              <li>${role}</li>
              <li>${gitHub}</li>
          </li>
          <li class = "intern containter">${name}
              <li>${id}</li>
              <li>${email}</li>
              <li>${role}</li>
              <li>${school}</li>
          </li>
        </ul>
      </div>
    </header>
  </body>
  </html>`;

module.exports = generateHTML;
