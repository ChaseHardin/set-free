module.exports = {
    'Welcome to React': function (browser) {
        browser
            .url('http://localhost:3000/')
            .waitForElementVisible('body');

        browser.expect.element('.App-title').to.be.visible;
        browser.assert.containsText('.App-title', 'Welcome to React');

        browser.end();
    }
}