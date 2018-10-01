module.exports = {
    'Welcome to React': function (browser) {
        browser
            .url('http://localhost:3000/')
            .waitForElementVisible('body');

        browser.expect.element('.App-styles').to.be.visible;
        browser.assert.containsText('.navbar-title', 'SetFree');

        browser.end();
    }
}