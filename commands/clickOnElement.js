//click on an element////////////////////////////////////////
module.exports = (browser, click_selector, insertNewRepo, screenShotsFail, testName) => {
  return new Promise(resolve => {
    browser
      .waitForElementVisible(click_selector[1], 30000, false)
      .click(click_selector[1], function (result) {
        insertNewRepo("Click On Element", result.status == 0, click_selector, testName);
        screenShotsFail(browser, result.status !== 0, click_selector[0]);
        browser.pause(300, () => {
          resolve();
        });
      });
  });
};
//////////////////////////////////////////////////////////
