// // 1. What Cypress is and why you should use it?

// Cypress end to end testing that focuses on the front-end.
//  It is a framework that uses the runtime environment of Node.
//  It should be used because it is able to run, debug, and write code all at the same time.
//   It includes many features to speed up testing.

///////////////////////////////////
// // 2. What types of tests is Cypress designed for?

// Cypress is designed for any type of testing. Mainly end-to-end, component, integration, and unit testing.
// Cypress' ability to run E2E tests is used to test app from the browser to the backend which helps to build and test an entire front-end and back-end application.
// The component aspect can be mounted to test specific pieces on its own and works with functionality.

// 3. Write a test that visits the URL https://www.roadtohire.org/ and explain your code.

describe("Road to Hire Site", () => {
  it("should load the homepage ", () => {
    cy.visit("https://www.roadtohire.org/");
    cy.title().should("contain", "Road to Hire");
  });
});
// 4. Write a test based on the following HTML. Share the thought process behind your approach.  Be sure to share any resources that aided the construction of this test.

// <h1 class="header-inner container--fluid data-test-id="header-inner">
//   Road to Hire
// </h1>

describe("Header Test", () => {
  it("should display Road to Hire's header", () => {
    cy.visit("https://www.roadtohire.org/");
    cy.get(".header-inner").should("exsist");
    cy.get(".header-inner").should("contain", "Road to Hire");
  });
});

// 5. Explain the code snippet below:

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

// Make sure to define the following aspects of the code above:
// Describe
// It
// Expect
// .to.equal

//////////// answer

// The test is checking for the value and that is it equal to true. This checks if the test passes when the value matches properly.

// Describe is used to state what is being done in the code. In this exact example it is labeling that this is the first test to be completed.

// It is a test that is set to "does not do much" because it is a small, easy test.

// Expect is used for "assertions" it is what should happen and it is followed by a chain of methods like .toequal being true.

// .to.equal is comparing the expected value and the actual value in the test. If they are equal the test will pass and if they are not equal the test will fail.
// This test should pass.
