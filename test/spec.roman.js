var chai = require('chai');
var expect = chai.expect;
chai.should();

var roman = require('../lib/roman');

describe('roman', function () {

    it('exports an object', function () {
        roman.should.be.a('object');
    });

    describe('encode', function () {

        it('returns correct roman numerals for numbers', function () {
            roman.toRoman(0).should.equal('');
            roman.toRoman(1).should.equal('I');
            roman.toRoman(1234).should.equal('MCCXXXIV');
            roman.toRoman(1954).should.equal('MCMLIV');
            roman.toRoman(1990).should.equal('MCMXC');
            roman.toRoman(2014).should.equal('MMXIV');
            roman.toRoman('1999').should.equal('MCMXCIX');
            roman.toRoman('9999').should.equal('I̅X̅CMXCIX');
            roman.toRoman('1423423').should.equal('M̅C̅D̅X̅X̅MMMCDXXIII');
        });

    });

    describe('decode', function () {

        it('returns correct number for roman numerals', function () {
            roman.toDecimal('').should.equal(0);
            roman.toDecimal('I').should.equal(1);
            roman.toDecimal('MCCXXXIV').should.equal(1234);
            roman.toDecimal('MCMLIV').should.equal(1954);
            roman.toDecimal('MCMXC').should.equal(1990);
            roman.toDecimal('MMXIV').should.equal(2014);
            roman.toDecimal('MCMXCIX').should.equal(1999);
            roman.toDecimal('I̅X̅CMXCIX').should.equal(9999);
        });

        it('returns correct number for incorrect roman numerals', function () {
            roman.toDecimal('MIM').should.equal(1999);
        });

        it('returns an error number for incorrect roman numerals when asked to check', function () {
            expect( function () {
                roman.toDecimal('MIM', true);
            }).to.throw(/MIM is not valid Roman Numerals. Should be MCMXCIX/);
        });
    });

});

