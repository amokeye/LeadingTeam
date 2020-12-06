// Dependencies
const Engineer = require("../lib/Engineer");
const { TestResult } = require("@jest/types");

// Testing github constuctor and classes
test("Can set Github account via constructor", () => {
  const GH = "GithubName";
  const engGH = new Engineer("The Engineer", "test@email.com", 123, GH);
  expect(engGH.Github).toBe(GH);
});

test("getRole() should return \"Engineer\"", () => {
  const testEngRole = "Engineer";
  const eRole = new Engineer("Foo", "test@email.com", 123, "GitHubUser");
  expect(eRole.getRole()).toBe(testEngRole);
});

test("Can get GitHub username via getGithub()", () => {
  const testEngGH2 = "GitHubUser";
  const eGH = new Engineer("Foo", "test@email.com", 123, testEngGH2);
  expect(eGH.getGithub()).toBe(testEngGH2);
});