describe("if your app uses jQuery", function() {
  before(function() {});
  context("URL Visit", function() {
    const urls = [
      "https://oldnavy.gap.com/browse/info.do?cid=1114260",
      "https://oldnavy.gap.com/browse/info.do?cid=1138861",
      // "https://oldnavy.gap.com/browse/info.do?cid=1061549",
      // "https://oldnavy.gap.com/browse/info.do?cid=1063193",
      // "https://oldnavy.gap.com/browse/info.do?cid=1131044",
      // "https://oldnavy.gap.com/browse/info.do?cid=1093429",
      // "https://oldnavy.gap.com/browse/info.do?cid=1130006",
      // "https://oldnavy.gap.com/browse/info.do?cid=96219",
      // "https://oldnavy.gap.com/browse/info.do?cid=1040082",
      // "https://oldnavy.gap.com/browse/info.do?cid=1116200",
      // "https://oldnavy.gap.com/browse/info.do?cid=1133148",
      // "https://oldnavy.gap.com/browse/info.do?cid=1085602",
      // "https://oldnavy.gap.com/browse/info.do?cid=1143265",
      // "https://oldnavy.gap.com/browse/info.do?cid=1083801",
      // "https://oldnavy.gap.com/browse/info.do?cid=1134048",
      // "https://oldnavy.gap.com/browse/info.do?cid=1030898",
      // "https://oldnavy.gap.com/browse/info.do?cid=53516",
      // "https://oldnavy.gap.com/browse/info.do?cid=70707",
      // "https://oldnavy.gap.com/browse/info.do?cid=1042119",
      // "https://oldnavy.gap.com/browse/info.do?cid=1118802",
      // "https://oldnavy.gap.com/browse/info.do?cid=1044739",
      // "https://oldnavy.gap.com/browse/info.do?cid=93761",
      // "https://oldnavy.gap.com/browse/info.do?cid=1000602",
      // "https://oldnavy.gap.com/browse/info.do?cid=64159",
      // "https://oldnavy.gap.com/browse/info.do?cid=70709",
      // "https://oldnavy.gap.com/browse/info.do?cid=1083800",
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
      // "https://oldnavy.gap.com/browse/info.do?cid=1127828",
      // "https://oldnavy.gap.com/browse/info.do?cid=1113546",
      // "https://oldnavy.gap.com/browse/info.do?cid=1104520",
      // "https://oldnavy.gap.com/browse/info.do?cid=50784",
      // "https://oldnavy.gap.com/browse/info.do?cid=65371",
      // "https://oldnavy.gap.com/browse/info.do?cid=51344",
      // "https://oldnavy.gap.com/browse/info.do?cid=1063242",
      // "https://oldnavy.gap.com/browse/info.do?cid=1071194",
      // "https://oldnavy.gap.com/browse/info.do?cid=24295",
      // "https://oldnavy.gap.com/browse/info.do?cid=64160",
      // "https://oldnavy.gap.com/browse/info.do?cid=3024"
    ];
    urls.forEach(url => {
      it("visits each page", function() {
        // if your app uses jQuery, then we can trigger a jQuery
        // event that causes the event callback to fire
        cy.visit(url);
        cy.screenshot();
      });
    });
  });
});
