function Employee (name, id, email,role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
}
const manager = new Employee ();
manager.officeNumber = "";
const engineer = new Employee ();
engineer.gitHub= "";
const intern = new Employee ();
intern.school = "school";



function Manager (name, id, email,role, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.officeNumber = officeNumber;
}
function Engineer (name, id, email,role,gitHub) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.gitHub = gitHub;
}
function Intern (name, id, email,role,school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.school = school;
}