# Roman Numeral Converter

This is a JavaScript function that converts an integer (<= 1,000) to its old-school Roman numeral equivalent. The function follows the traditional Roman numeral system without using subtraction.

## How it Works

The function `toRoman(number)` takes an integer as input and returns its Roman numeral representation. It uses the following building blocks for encoding numbers with Roman numerals:

| Decimal | Roman |
|---------|-------|
| 1       | I     |
| 5       | V     |
| 10      | X     |
| 50      | L     |
| 100     | C     |
| 500     | D     |
| 1,000   | M     |

The function iterates through these building blocks from the largest value (1,000) to the smallest value (1) and repeatedly adds the corresponding Roman numeral symbols while reducing the remaining number until it becomes zero.

## Usage

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone the repository:

```
git clone https://github.com/your-username/roman-numeral-converter.git
```

2. Navigate to the project directory:

```
cd roman-numeral-converter
```

3. Open `romanNumerals.js` and add the `toRoman` function to your project.

4. Test the function with different examples:

```javascript
const { toRoman } = require('./romanNumerals');

console.log(toRoman(5));   // Output: 'V'
console.log(toRoman(267)); // Output: 'CCLXVII'
console.log(toRoman(99));  // Output: 'LXXXXVIIII'
```

## Limitations

The function is designed to handle integers between 1 and 1,000. Numbers outside this range will throw an error.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Contribution

If you find any issues or have suggestions for improvement, please open an issue or create a pull request. Contributions are welcome!

---

Happy coding!