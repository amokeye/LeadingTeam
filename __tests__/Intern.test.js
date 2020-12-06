
// Dependencies
const { TestResult } = require("@jest/types");
const Intern = require("../lib/Intern");

// Testing school constructor and classes
test("Can set school via constructor", () => {
  const testSchool = "UC Berkeley";
  const iSchool = new Intern("Foo", "test@email.com", 123, testSchool);
  expect(iSchool.school).toBe(testSchool);
});

test("getRole() should return \"Intern\"", () => {
  const testRole = "Intern";
  const iRole = new Intern("Foo", "test@email.com", 123, "UC Berkeley");
  expect(iRole.getRole()).toBe(testRole);
});

test("Can get school via getSchool()", () => {
  const testConstSchool = "UC Berkeley";
  const iConstSchool = new Intern("Foo", "test@email.com", 123, testConstSchool);
  expect(iConstSchool.getSchool()).toBe(testConstSchool);
});