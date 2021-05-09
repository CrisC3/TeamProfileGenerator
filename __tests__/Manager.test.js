const Manager = require ("../lib/Manager");

const jsId = 1;
const jsName = "Chloe";
const jsEmail = "Chloe@email.com";
const jsOfficeNumber = 1;
const manager = new Manager(jsId, jsName, jsEmail, jsOfficeNumber);

describe("Manager", () => {
    describe("Initialization", () => {

        it("Should create an Manager object", () => {
            expect(manager.id).toEqual(jsId);
            expect(manager.name).toEqual(jsName);
            expect(manager.email).toEqual(jsEmail);
            expect(manager.officeNumber).toEqual(jsOfficeNumber);
        });

        it("Get Manager Employee ID", () => {
            expect(manager.getId()).toEqual(jsId);
        });

        it("Get Manager name", () => {
            expect(manager.getName()).toEqual(jsName);
        });

        it("Get Manager email", () => {
            expect(manager.getEmail()).toEqual(jsEmail);
        });

        it("Get Manager office number", () => {
            expect(manager.officeNumber).toEqual(jsOfficeNumber);
        });

        it("Get Employee role", () => {
            expect(manager.getRole()).toEqual("Manager");
        });
        
    });
});