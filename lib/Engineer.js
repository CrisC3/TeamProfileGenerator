const Employee = require("./Employee.js");

class Engineer extends Employee {
    
    constructor(id, name, email, github) {
        
        super(id, name, email);
        
        this.role = "Engineer";
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }    
}

module.exports = Engineer;

//#region Quick testing

    // const newEngineer = new Engineer(3, "Engineer's name", "engineer@gmail.com", "engineer Github account");
    // console.log(newEngineer);

//#endregion