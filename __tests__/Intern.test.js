const Intern = require ("../lib/Intern");

const jsId = 1;
const jsName = "Chloe";
const jsEmail = "Chloe@email.com";
const jsSchool = "Coding Bootcamp";
const intern = new Intern(jsId, jsName, jsEmail, jsSchool);

describe("Intern", () => {
    describe("Initialization", () => {

        it("Should create an Intern object", () => {
            expect(intern.id).toEqual(jsId);
            expect(intern.name).toEqual(jsName);
            expect(intern.email).toEqual(jsEmail);
            expect(intern.school).toEqual(jsSchool);
        });

        it("Get Intern Employee ID", () => {
            expect(intern.getId()).toEqual(jsId);
        });

        it("Get Intern name", () => {
            expect(intern.getName()).toEqual(jsName);
        });

        it("Get Intern email", () => {
            expect(intern.getEmail()).toEqual(jsEmail);
        });

        it("Get Intern school", () => {
            expect(intern.school).toEqual(jsSchool);
        });

        it("Get Employee role", () => {
            expect(intern.getRole()).toEqual("Intern");
        });
        
    });
});