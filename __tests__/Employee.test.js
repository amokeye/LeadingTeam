// Dependencies
const Employee = require("../lib/Employee");
const { TestResult } = require("@jest/types");

// Testing instantiation, name, ID, email, and classes
test("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Can set name via constructor argument", () => {
    const name = "John";
    const empName = new Employee(name);
    expect(empName.name).toBe(name);
});

test("Can set ID via constructor argument", () => {
    const testEmpID = "100";
    const empID = new Employee("Foo", "test@email.com", testEmpID);
    expect(empID.id).toBe(testEmpID);
});

test("Can set email via constructor argument", () => {
    const testEmpEmail = "test@email.com";
    const empEmail = new Employee("Foo", testEmpEmail, 123);
    expect(empEmail.email).toBe(testEmpEmail);
});

test("Can get employee name via getName()", () => {
    const testConstGN = "John";
    const empGN = new Employee(testConstGN);
    expect(empGN.getName()).toBe(testConstGN);
});
    
test("Can get id via getID()", () => {
    const testConstID = 100;
    const empGID = new Employee("Foo", "test@email.com", 100);
    expect(empGID.getID()).toBe(testConstID);
});

test("Can get email via getEmail()", () => {
    const testConstEmail = "test@email.com";
    const empGEmail = new Employee("Foo", testConstEmail, 100);
    expect(empGEmail.getEmail()).toBe(testConstEmail);
});
    

test("getRole() should return \"Employee\"", () => {
    const testConstRole = "Employee";
    const empRole = new Employee("John", "test@email.com", 123);
    expect(empRole.getRole()).toBe(testConstRole);
});