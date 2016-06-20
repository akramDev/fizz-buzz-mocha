var expect = require('chai').expect

function fizzbuzz(input) {
    if(input == 3)
        return 'fizz'
    return input
}

describe('fizzbuzz', function() {
    it('should return 1 for fizzbuzz of 1', function () {
        expect(fizzbuzz(1)).to.be.equal(1)
    });
    
    it('should return 2 for fizzbuzz of 2', function () {
        expect(fizzbuzz(2)).to.be.equal(2)
    });
    
    it('should return fizz for fizzbuzz of 3', function () {
        expect(fizzbuzz(3)).to.be.equal('fizz')
        expect(fizzbuzz(3)).to.contains('zz')
    });

    it('should return undefined for fizzbuzz of undefined', function () {
        expect(fizzbuzz(undefined)).to.be.undefined
    })
    
});