module.exports = {
    
    'issue': { 

        'should include a <3 in the description': function (assert, haunt) {
            assert.ok(/<3/.test(haunt.description));
        },

        'after': function (haunt) {
            if (!haunt.failed.length) haunt.tag('<3');
        }

    }
    
}