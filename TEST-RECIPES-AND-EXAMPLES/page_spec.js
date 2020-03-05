// describe("My First Test", function() {
//   it("Visits page", function() {
//     cy.visit("https://example.cypress.io");
//     cy.contains("type").click();
//     cy.url().should('include', '/commands/actions')

//     cy.get(".action-email")
//       .type("fake@email.com")
//       .should("have.value", "fake@email.com");
//   });
// });

describe("page test - suite", () => {
  it("Visits page", function() {
    cy.visit("https://www.gap.com");
    cy.screenshot();
    // cy.contains("type").click();
    // cy.screenshot();
    // cy.url().should("include", "/commands/actions");
    // //   cy.debug()

    // cy.get(".action-email").should("have.value", "");

    // cy.get(".action-email")
    //   .type("fake@email.com")
    //   .should("have.value", "fake@email.com");

    // cy.fixture("heroes/list.json").as("heroesList");
    // cy.route("GET", "http://localhost:3000/products", "@heroesList");

    // cy.visit("http://localhost:4200");
    // cy.server();
  });
  it("Visits page", function() {
    cy.visit("https://www.mikefrenkel.com");
    cy.screenshot();
    // cy.contains("type").click();
    // cy.screenshot();
    // cy.url().should("include", "/commands/actions");
    // //   cy.debug()

    // cy.get(".action-email").should("have.value", "");

    // cy.get(".action-email")
    //   .type("fake@email.com")
    //   .should("have.value", "fake@email.com");

    // cy.fixture("heroes/list.json").as("heroesList");
    // cy.route("GET", "http://localhost:3000/products", "@heroesList");

    // cy.visit("http://localhost:4200");
    // cy.server();
  });

});
