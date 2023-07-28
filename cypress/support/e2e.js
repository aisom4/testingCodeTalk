// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Alternatively you can use CommonJS syntax:
// require('./commands')
<reference types="cypress" />;

describe("Road to Hire Site", () => {
  it("should load the homepage ", () => {
    cy.visit("https://www.roadtohire.org/");
    cy.title().should("contain", "Road to Hire");
  });
});
