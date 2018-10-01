module.exports = {
    'Should start at Home Page with App Title': function (browser) {
        browser
            .url('http://localhost:3000/')
            .waitForElementVisible('body');

        browser.expect.element('.app-styles').to.be.visible;
        browser.assert.containsText('.navbar-title', 'SetFree');
        browser.assert.containsText('.home-title', 'Home Page');

        browser.end();
    }
}