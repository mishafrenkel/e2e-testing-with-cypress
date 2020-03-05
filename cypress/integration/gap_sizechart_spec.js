// small parts of this code copied from https://github.com/cypress-io/cypress-example-todomvc

context("Cypress.io Eyes Integration", function() {
  const urls = [
    // "https://oldnavy.gap.com/browse/info.do?cid=1138861",
    // "https://oldnavy.gap.com/browse/info.do?cid=1009990",
    // "https://oldnavy.gap.com/browse/info.do?cid=1079716",
    // "https://oldnavy.gap.com/browse/info.do?cid=64693",
    // "https://oldnavy.gap.com/browse/info.do?cid=1085803",
    // "https://oldnavy.gap.com/browse/info.do?cid=70705",
    // "https://oldnavy.gap.com/browse/info.do?cid=1021103",
    // "https://oldnavy.gap.com/browse/info.do?cid=1088319",
    // "https://oldnavy.gap.com/browse/info.do?cid=1083881",
    // "https://oldnavy.gap.com/browse/info.do?cid=1045869",
    // "https://oldnavy.gap.com/browse/info.do?cid=83641",
    // "https://oldnavy.gap.com/browse/info.do?cid=1127828"
    "https://www.gap.com",
  ];

  // This is needed in case the client/browser throws an uncaught error that is not handled.
  // Cyprus fails the tests and stops the screenshot capture.
  beforeEach(function() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      expect(true).to.be.true;

      // returning false here prevents Cypress from
      // failing the test if pages throw uncaught errors in our production or testing environment
      return false;
    });

    // cy.visit(url);
    // cy.eyesOpen({
    //   batchName: "configuration run",
    //   testName: "Size-chart Visual Regression Test",
    //   appName: "Gap",
    //   browser: [
    //     { width: 1024, height: 768, name: "chrome" },
    //     // {width: 400, height: 500, name: 'chrome'},
    //     // {width: 1280, height: 1024, name: 'chrome'},
    //     // {deviceName: 'iPhone X'},
    //     // {deviceName: 'iPad Pro'},
    //     // {width: 400, height: 500, name: 'firefox'},
    //     // {width: 1024, height: 768, name: 'firefox'},
    //     // {width: 1280, height: 1024, name: 'firefox'},
    //   ],
    // });
  });

  after(function() {
    //End Test
    // cy.eyesClose();
  });
  it("should display the page", done => {
    cy.visit("https://www.gap.com/browse/sizeChart.do?cid=2082");

    cy.screenshot();
    cy.compareSnapshot("sizeChart", 0.1)
      .then(() => {
        expect(true).to.be.true;
      })
      .then(() => done());
    // cy.compareSnapshot('mainPage', 0.1);
    // cy.eyesClose();
  });
  it("should have the 'Size Charts header visible between <h2> tags", done => {
    cy.visit("https://www.gap.com/browse/sizeChart.do?cid=2082");

    // cy.screenshot();
    // cy.compareSnapshot("mainPage", 0.1).then(() => {
    //   expect(true).to.be.true
    // }).then(() => done());
    cy.screenshot();

    // You can toggle the threshold here. For example: 0.5 means that the diffing algorithm triggers if 50% or more pixels differ.
    cy.compareSnapshot("SizeChart Container", 0.05)

    cy.get("#size_chart_data_container")
      .then(() => console.log("CLASS FOUND!"))
      .find("h2")
      .then(() => console.log("h2 was found!"))
      .should("be.visible").then(() => done());
  });
  it("should have the correct number of cells", done => {
    cy.visit("https://www.gap.com/browse/sizeChart.do?cid=2082");

    // cy.screenshot();
    // cy.compareSnapshot("mainPage", 0.1).then(() => {
    //   expect(true).to.be.true
    // }).then(() => done());

    // cy.screenshot();
    // cy.compareSnapshot("Picture of Cells", 0.1)


    cy.get("#size_chart_data_container")
      .then(() => console.log("CLASS FOUND!"))
      .find(".cell")
      .then($cell => {
        console.log(".cell class was found!");
        return $cell
      })
      .its('length')
      .should('be.eq', 544).then(() => done())
  });
});
