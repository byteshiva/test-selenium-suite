#!/usr/bin/env node
var argv = require('yargs').argv;
 
if (argv.url.length > 1) {
        var urlkore = argv.url || "http://192.168.10.8";
} else {
        process.exit(0);
}

var emailId = 'username@example.com';
var firstName ='first';
var lastName ='last';
var passwd ='*****';
var repasswd ='****';
var browserType = 'chrome';

var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: browserType
    }
};

var client = webdriverio
    .remote(options);

function registration() {
        client
            .init()
            .url(urlkore)
            .pause(5000)
            .click('#main-header > nav > div:nth-child(2) > div > div > button.btn.btn-default').pause(1000)
            .addValue('#login > div > div > div > div.login-form-content.ng-scope > div > form > div.form-group > div.input-group > input',emailId).pause(1000)
            .click('#login > div > div > div > div.login-form-content.ng-scope > div > form > div.button-group > button').pause(1000)
            .addValue('#login > div > div > div > div.login-form-content.ng-scope > div > form > div:nth-child(2) > div > input',firstName).pause(1000)
            .addValue('#login > div > div > div > div.login-form-content.ng-scope > div > form > div:nth-child(3) > div > input',lastName).pause(1000)
            .addValue('#login > div > div > div > div.login-form-content.ng-scope > div > form > div:nth-child(4) > div > input',passwd).pause(1000)
            .addValue('#login > div > div > div > div.login-form-content.ng-scope > div > form > div:nth-child(5) > div > input',repasswd).pause(1000)
            .pause(5000)
            .click('#login > div > div > div > div.login-form-content.ng-scope > div > form > div.button-group > button.btn.btn-primary').pause(1000)
            .pause(5000)
            .getTitle().then(function(title) {
                console.log('Title was: ' + title);
            })
           .end();


}

function loginfn() {
        webdriverio
            .remote(options)
            .init()
            .url(urlkore)
            .pause(5000)
            .click('#main-header > nav > div:nth-child(2) > div > div > button.btn.btn-default').pause(1000)
            .addValue('#login > div > div > div > div.login-form-content.ng-scope > div > form > div.form-group > div.input-group > input',emailId).pause(1000)
            .pause(5000)
            .click('#login > div > div > div > div.login-form-content.ng-scope > div > form > div:nth-child(3) > button').pause(1000)
            .addValue('#login > div > div > div > div.login-form-content.ng-scope > div > form > div:nth-child(2) > div > input',passwd).pause(1000)
            .click('#login > div > div > div > div.login-form-content.ng-scope > div > form > div.button-group > button.btn.btn-primary').pause(1000)
            .pause(5000)
            .getTitle().then(function(title) {
                console.log('Title was: ' + title);
            })
           .end();

}

// dynamically call method 
var x = { }; // better would be to have module create an object
// http://stackoverflow.com/questions/8206453/call-function-by-string-name-on-node-js
x.login = loginfn;
x.register = registration;

var funcstr = argv.m1;
if (typeof x[funcstr] === 'function') { 
        x[funcstr]();
} else {
        console.log("failed!!!");
}
