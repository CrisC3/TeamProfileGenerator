const Employee = require("./Employee.js");

class Intern extends Employee {

    constructor(id, name, email, school) {
        
        super(id, name, email);
        
        this.role = "Intern";
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;

//#region Quick testing

    // const newIntern = new Intern(3, "Intern's Name", "intern@gmail.com", "University of Houston");
    // console.log(newIntern);

//#endregion