// Dependencies
const Manager = require("../lib/Manager");
const { TestResult } = require("@jest/types");

// Testing office constructor and classes
test("Can set office number via constructor argument", () => {
  const office = 1234567;
  const mOffice = new Manager("Foo", "test@email.com", 123, office);
  expect(mOffice.officeNumber).toBe(office);
});

test("getRole() should return \"Manager\"", () => {
  const Role = "Manager";
  const mRole = new Manager("Foo", "test@email.com", 123, 1234567);
  expect(mRole.getRole()).toBe(Role);
});

test("Can get office number via getOffice()", () => {
  const OfficeConst = 1234567;
  const mOfficeConst = new Manager("Foo", "test@email.com", 123, OfficeConst);
  expect(mOfficeConst.getOfficeNumber()).toBe(OfficeConst);
});