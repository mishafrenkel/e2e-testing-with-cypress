// // small parts of this code copied from https://github.com/cypress-io/cypress-example-todomvc
// context("Gap HomePage Spec", function() {
//     const urls = [
//       // "https://oldnavy.gap.com/browse/info.do?cid=1138861",
//       // "https://oldnavy.gap.com/browse/info.do?cid=1009990",
//       // "https://oldnavy.gap.com/browse/info.do?cid=1079716",
//       // "https://oldnavy.gap.com/browse/info.do?cid=64693",
//       // "https://oldnavy.gap.com/browse/info.do?cid=1085803",
//       // "https://oldnavy.gap.com/browse/info.do?cid=70705",
//       // "https://oldnavy.gap.com/browse/info.do?cid=1021103",
//       // "https://oldnavy.gap.com/browse/info.do?cid=1088319",
//       // "https://oldnavy.gap.com/browse/info.do?cid=1083881",
//       // "https://oldnavy.gap.com/browse/info.do?cid=1045869",
//       // "https://oldnavy.gap.com/browse/info.do?cid=83641",
//       // "https://oldnavy.gap.com/browse/info.do?cid=1127828"
//     //   "https://www.gap.com",
//     ];

//     // This is needed in case the client/browser throws an uncaught error that is not handled.
//     // Cyprus fails the tests and stops the screenshot capture.
//     beforeEach(function() {
//       Cypress.on("uncaught:exception", (err, runnable) => {
//         expect(true).to.be.true;

//         // returning false here prevents Cypress from
//         // failing the test if pages throw uncaught errors in our production or testing environment
//         return false;
//       });

//     //   cy.visit("https://www.gap.com");
//       cy.eyesOpen({
//         batchName: "Gap HomePage",
//         testName: "Gap Visual Regression",
//         appName: "Gap Home Page",
//         browser: [
//           { width: 1024, height: 768, name: "chrome" },
//           {width: 400, height: 500, name: 'chrome'},
//           {width: 1280, height: 1024, name: 'chrome'},
//           {deviceName: 'iPhone X'},
//           {deviceName: 'iPad Pro'},
//           {width: 400, height: 500, name: 'firefox'},
//           {width: 1024, height: 768, name: 'firefox'},
//           {width: 1280, height: 1024, name: 'firefox'},
//         ],
//       });
//     });

//     after(function() {
//       //End Test
//       cy.eyesClose();
//     });
//     it("should show correct amount of cells", done => {
//       cy.visit("https://www.gap.com/browse/sizeChart.do?cid=2082");

//       cy.screenshot();
//       cy.compareSnapshot("mainPage", 0.1).then(() => {
//         expect(true).to.be.true
//       }).then(() => done());
//       // cy.compareSnapshot('mainPage', 0.1);
//       // cy.eyesClose();
//     });
//   });
