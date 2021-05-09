const Manager = require ("../lib/Manager");
const Engineer = require ("../lib/Engineer");
const Intern = require ("../lib/Intern");
const Template = require("../src/template");

let teamMembers = {
    manager: "",
    engineers: [],
    interns: []
};

describe("Intern", () => {
    describe("Initialization", () => {

        it("Create a test index.html", () => {
            const manager = new Manager(1, "Jared", "Jared@email.com", 1);
            const engineer1 = new Engineer(2, "Alec", "Alec@email.com", "ibealec");
            const engineer2 = new Engineer(3, "Grace", "Grace@email.com", "gchoi2u");
            const engineer3 = new Engineer(4, "Tammer", "Tammer@email.com", "tammerg");
            const intern = new Intern(5, "John", "John@email.com", "Bootcamp");

            teamMembers.manager = JSON.stringify(manager);
            teamMembers.engineers.push(engineer1);
            teamMembers.engineers.push(engineer2);
            teamMembers.engineers.push(engineer3);
            teamMembers.interns.push(intern);

            const template = new Template(teamMembers);
            template.webLocalPath = "./dist/index.sample.html";
            template.generateWeb();
        });
    });
});