const Employee = require("./Employee.js");

class Manager extends Employee {

    constructor(id, name, email, officeNumber) {
        
        super(id, name, email);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.role;
    }

}

module.exports = Manager;

//#region Quick testing

    // const newManager = new Manager(2, "Manager's name", "manager@gmail.com", 2);
    // console.log(newManager);

//#endregion