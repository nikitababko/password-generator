# Password generator &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Installation

- npm - `npm i @nikitababko/password-generator`

- yarn - `yarn add @nikitababko/password-generator`

- pnpm - `pnpm i @nikitababko/password-generator`

## Usage example

```
  // ts import
  import generatePassword from '@nikitababko/password-generator';
  
  // js import
  const generatePassword = require('@nikitababko/password-generator');
  
  
  generatePassword({ length: 16 }) // [ 'ks3vaGA@?,798FM!' ]
  
  generatePassword({ length: 16, quantity: 2 }) // [ '+q"]G322WMxi!E6d', "l@4W0Nzm3R4>Q~?r' ]
```

### Available options

| Name                    | Description                           | Default Value |
|-------------------------|---------------------------------------|---------------|
| length                  | Integer, password length              | 16            |
| quantity                | Integer, number of passwords          | 1             |
| includeNumbers          | Boolean, include numbers              | true          |
| includeLowerCaseChars   | Boolean, include lowercase chars      | true          |
| includeUpperCaseChars   | Boolean, include uppercase chars      | true          |
| includeSymbols          | Boolean, include symbols              | true          |
| excludeSimilarChars     | Boolean, exclude similar chars        | false         |
| excludeSequentialChars  | Boolean, exclude sequential chars     | false         |
| excludeDuplicatesChars  | Boolean, exclude duplicates chars     | false         |
| excludeAmbiguousChars   | Boolean, exclude ambiguous chars      | false         |
| dontStartingWithANumber | Boolean, don't starting with a number | false         |
| dontStartingWithASymbol | Boolean, don't starting with a symbol | false         |

## License

[MIT](./LICENSE.md)
