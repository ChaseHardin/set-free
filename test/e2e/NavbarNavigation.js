module.exports = {
    'Should start at Home Page with App Title': function (browser) {
        browser
            .url('http://localhost:3000/')
            .waitForElementVisible('body');

        browser.expect.element('.app-styles').to.be.visible;
        browser.assert.containsText('.navbar-title', 'SetFree');
        browser.assert.containsText('.home-title', 'Home Page');

        browser.end();
    },

    'Shuld navigate to Home Screen': function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body');

        browser.click('.home-route');

        browser.assert.containsText('.home-title', 'Home Page');

        browser.end();
    },

    'Should navigate to Score Screen': function (browser) {
        browser
            .url('http://localhost:3000/')
            .waitForElementVisible('body');

        browser.click('.score-route');

        browser.assert.containsText('.score-title', 'Score Page');

        browser.end();
    },

    'Should navigate to Profile Screen': function(browser) {
        browser
            .url('http://localhost:3000/')
            .waitForElementVisible('body');
        
        browser.click('.profile-route');

        browser.assert.containsText('.profile-title', 'Profile Page');

        browser.end();
    }
}