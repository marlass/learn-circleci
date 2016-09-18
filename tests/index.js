const test = require('tape');

const printer = require('../app/index.js');

module.exports = function(){
    
test('printing function', function(t) {
    t.equal(printer(), 'Hello world!');
    t.end();
});

test('failing test', function(t) {
    t.equal('fail','fail');
    t.end();
});

}