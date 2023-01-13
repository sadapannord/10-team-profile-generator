class Employee {
    constructor(name, id, email,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email,role);
        this.officeNumber = officeNumber;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, role,gitHub) {
        super(name, id, email,role,);
        this.gitHub = gitHub;
    }
}


class Intern extends Employee {
    constructor (name, id, email, role, school){
        super(name, id, email,role,);
        this.school = school;
    }
}

module.exports = Employee;
module.exports = Manager;
module.exports = Engineer;
module.exports = Intern;