
var Roman = function () {

};

Roman.romanToDecimal = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

Roman.prototype.toDecimal = function (roman, checkIsValid) {
    if (typeof roman !== 'string') {
        throw new Error('Roman numerals must be a string');
    }
    roman = roman.trim();

    var value = 0;

    for (var i = 0; i < roman.length; i++) {
        var ch = Roman.romanToDecimal[ roman[i] ];

        if (!ch) {
            throw new Error('Unknown roman numeral: ' + roman[i] + ' at position ' + (i + 1));
        }

        if (roman[i + 1] === '̅') {
            ch *= 1000;
            i++;
        }

        var next = Roman.romanToDecimal[ roman[i + 1] ];

        if (roman[i + 2] === '̅') {
            next *= 1000;
        }

        if (!next || ch >= next) {
            value += ch;
        } else {
            value -= ch;
        }
    }

    if (checkIsValid) {
        var validRoman = this.toRoman(value);
        if (validRoman !== roman) {
            throw new Error(roman + ' is not valid Roman Numerals. Should be ' + validRoman);
        }
    }

    return value;
};

Roman.decimalToRoman = [
    { v: 1000000, r: 'M̅' },
    { v: 900000, r: 'X̅M̅' },
    { v: 500000, r: 'D̅' },
    { v: 400000, r: 'C̅D̅' },
    { v: 100000, r: 'C̅' },
    { v: 90000, r: 'X̅C̅' },
    { v: 50000, r: 'L̅' },
    { v: 40000, r: 'X̅L̅' },
    { v: 10000, r: 'X̅' },
    { v: 9000, r: 'I̅X̅' },
    { v: 5000, r: 'V̅' },
    { v: 4000, r: 'I̅V̅' },
    { v: 1000, r: 'M' },
    { v: 900, r: 'CM' },
    { v: 500, r: 'D' },
    { v: 400, r: 'CD' },
    { v: 100, r: 'C' },
    { v: 90, r: 'XC' },
    { v: 50, r: 'L' },
    { v: 40, r: 'XL' },
    { v: 10, r: 'X' },
    { v: 9, r: 'IX' },
    { v: 5, r: 'V' },
    { v: 4, r: 'IV' },
    { v: 1, r: 'I' }
];

Roman.prototype.toRoman = function (value) {
    value = parseInt(value, 10);
    if (value <= 0) return '';

    var roman = '';

    Roman.decimalToRoman.forEach(function (numeral) {
        while (value >= numeral.v) {
            roman += numeral.r;
            value -= numeral.v;
        }
    });

    return roman;
};

module.exports = new Roman();
