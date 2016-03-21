

# romannumerals

Lightweight roman numeral translator. Supports decimal numbers up to 5000000 or so.

## Usage

    var roman = require('romannumerals);

    roman.toRoman(0);
    ''
    roman.toRoman(1)
    'I'
    roman.toRoman(1234);
    'MCCXXXIV'
    roman.toRoman(1954);
    'MCMLIV'
    roman.toRoman(1990);
    'MCMXC'
    roman.toRoman(2014);
    'MMXIV'
    roman.toRoman('1999');
    'MCMXCIX'
    roman.toRoman('9999');
    I̅X̅CMXCIX'
    roman.toRoman('1423423');
    M̅C̅D̅X̅X̅MMMCDXXIII'

    roman.toDecimal('');
    0
    roman.toDecimal('I')
    1
    roman.toDecimal('MCCXXXIV');
    1234
    roman.toDecimal('MCMLIV');
    1954
    roman.toDecimal('MCMXC');
    1990
    roman.toDecimal('MMXIV');
    2014
    roman.toDecimal('MCMXCIX');
    1999
    roman.toDecimal('I̅X̅CMXCIX');
    9999

    roman.toDecimal('MIM');
    Error: MIM is not valid Roman Numerals. Should be MCMXCIX
    roman.toRoman(roman.toDecimal('MIM'));
    'MCMXCIX'


