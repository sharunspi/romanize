# Romanize-Numbers

[![npm version](https://badge.fury.io/js/romanize-numbers.svg)](https://badge.fury.io/js/romanize-numbers)
[![Build Status](https://travis-ci.com/example/romanize-numbers.svg?branch=master)](https://travis-ci.com/example/romanize-numbers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/example/romanize-numbers/blob/master/LICENSE)

Convert Arabic numerals into their Roman numeral equivalents.

## Installation

To install the Romanize-Numbers library, use the following command:
<br>
`npm install romanize-numbers`

## Usage

To use the Romanize-Numbers library in your project, you can import it as follows:

```javascript
const romanize = require("romanize-numbers");
```

You can then use the romanize function to convert Arabic numerals into their Roman numeral equivalents:

```javascript
const romanNumeral = romanize(123);
console.log(romanNumeral); // "CXXIII"
```

## API

romanize(number)
Converts an Arabic numeral into its Roman numeral equivalent.

Arguments
number (required): The Arabic numeral to convert.
Returns
The Roman numeral equivalent of the input number as a string.

## Examples

```javascript
const romanize = require("romanize-numbers");

console.log(romanize(1)); // "I"
console.log(romanize(4)); // "IV"
console.log(romanize(9)); // "IX"
console.log(romanize(42)); // "XLII"
console.log(romanize(3999)); // "MMMCMXCIX"
```

## License

Romanize-Numbers is licensed under the MIT License. See the LICENSE file for more information.
