const Employee = require ("../lib/Employee");

const jsId = 1;
const jsName = "Chloe";
const jsEmail = "Chloe@email.com";
const employee = new Employee(jsId, jsName, jsEmail);

describe("Employee", () => {
    describe("Initialization", () => {

        it("Create an Employee object", () => {            
            expect(employee.id).toEqual(jsId);
            expect(employee.name).toEqual(jsName);
            expect(employee.email).toEqual(jsEmail);
        });

        it("Get Employee ID", () => {
            expect(employee.getId()).toEqual(jsId);
        });

        it("Get Employee name", () => {
            expect(employee.getName()).toEqual(jsName);
        });

        it("Get Employee email", () => {
            expect(employee.getEmail()).toEqual(jsEmail);
        });

        it("Get Employee role", () => {
            expect(employee.getRole()).toEqual("Employee");
        });
        
    });
});