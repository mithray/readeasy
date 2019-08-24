# Readeasy

This is to test the readability of text. Right now it only works for entire blocks of text. Soon I will fix it to divide by sentences so that it can provide hints about specific sentences that need might need simplifying.

## Installation

```bash
npm i readeasy --save
```

## Usage

```javascript
const readeasy = require('readeasy')

let text = "Always use a shorter word where possible!"
let readability = readeasy(text)

console.log(readability)
```
