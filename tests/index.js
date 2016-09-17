var test = require('tape');

var printer = require('../app/index.js');

test('printing function', function(t) {
    t.equal(printer(), 'Hello world!');
    t.end();
});

test('failing test', function(t) {
    t.equal(printer(),'fail');
    t.end();
})