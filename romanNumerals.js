/* Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

For reference, these are the building blocks for how we encode numbers with Roman numerals:

Decimal

Roman

1

I

5

V

10

X

50

L

100

C

500

D

1,000

M

For example:

toRoman(5)
'V'

toRoman(267)
'CCLXVII'
Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

For example:

toRoman(99)
'LXXXXVIIII'

*/

function toRoman(number) {
    if (number <= 0 || number > 1000) {
      throw new Error('Invalid input: Number must be between 1 and 1000.');
    }
  
    const romanNumerals = [
      { value: 1000, symbol: 'M' },
      { value: 500, symbol: 'D' },
      { value: 100, symbol: 'C' },
      { value: 50, symbol: 'L' },
      { value: 10, symbol: 'X' },
      { value: 5, symbol: 'V' },
      { value: 1, symbol: 'I' },
    ];
  
    let result = '';
  
    for (const numeral of romanNumerals) {
      while (number >= numeral.value) {
        result += numeral.symbol;
        number -= numeral.value;
      }
    }
  
    return result;
  }
  
  console.log("Results: ", toRoman(5));
  console.log(toRoman(267)); 
console.log(toRoman(99));