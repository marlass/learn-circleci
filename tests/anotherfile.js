const test = require('tape');

const testFunction = require('../app/anotherfile.js');

module.exports = function(){

test('testFunction', function(t) {
    t.equal(testFunction(!0), 'blob');
    t.end();
});

test('testFunction false', function(t) {
    t.equal(testFunction(0), 'foo');
    t.end();
})

}