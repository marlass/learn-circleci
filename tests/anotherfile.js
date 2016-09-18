const test = require('tape');

const testFunction = require('../app/anotherfile.js');

module.exports = function(){

test('printing function', function(t) {
    t.equal(testFunction(!0), 'blob');
    t.end();
});

test('failing test', function(t) {
    t.equal(testFunction(0), 'foo');
    t.end();
})

}