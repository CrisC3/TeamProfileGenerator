const Engineer = require ("../lib/Engineer");

const jsId = 1;
const jsName = "Chloe";
const jsEmail = "Chloe@email.com";
const jsGithub = "Chloe";
const engineer = new Engineer(jsId, jsName, jsEmail, jsGithub);

describe("Engineer", () => {
    describe("Initialization", () => {

        it("Should create an Engineer object", () => {
            expect(engineer.id).toEqual(jsId);
            expect(engineer.name).toEqual(jsName);
            expect(engineer.email).toEqual(jsEmail);
            expect(engineer.github).toEqual(jsGithub);
        });

        it("Get Engineer Employee ID", () => {
            expect(engineer.getId()).toEqual(jsId);
        });

        it("Get Engineer name", () => {
            expect(engineer.getName()).toEqual(jsName);
        });

        it("Get Engineer email", () => {
            expect(engineer.getEmail()).toEqual(jsEmail);
        });

        it("Get Engineer github username", () => {
            expect(engineer.github).toEqual(jsGithub);
        });

        it("Get Employee role", () => {
            expect(engineer.getRole()).toEqual("Engineer");
        });
        
    });
});