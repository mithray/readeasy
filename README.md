# Readeasy

## Introduction

This is to test the readability of text. Right now it only works for entire blocks of text. Soon I will fix it to divide by sentences so that it can provide hints about specific sentences that need might need simplifying. `readeasy` is a function that accepts a text as input and it returns an object with detailed information about the readability of the text.

## Contents

* [Introduction](#introduction)
* [Installation](#installation)
* [Usage](#usage)
* [understanding](#understanding)

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

## Understanding

The below is a simplifed output of a test paragraph. Notice the heirarchical structure. The text is tested on the whole for readability but also has more readability for each paragraph(separated by a new line), each sentence(separated by a period) and every word(separted by a space).

```json
{
  "score": 78.12031969309464,
  "schoolLevel": "7th grade",
  "notes": "Fairly easy to read.",
  "grade": 3.707544757033247,
  "paragraphs": [
    {
      "score": 76.06927648578812,
      "schoolLevel": "7th grade",
      "notes": "Fairly easy to read.",
      "grade": 3.8361240310077527,
      "text": "First Paragraph. This is to test the readability of text. Right now it only works for entire blocks of text. Soon I will fix it to divide by sentences so that it can provide hints about specific sentences that need might need simplifying.",
      "sentences": [
        {
          "score": 36.95833333333334,
          "schoolLevel": "college",
          "notes": "Difficult to read.",
          "grade": 8.270000000000003,
          "text": "First Paragraph.",
          "words": [
            {
              "text": "First",
              "syllables": 1
            },
            {
              "text": "Paragraph.",
              "syllables": 3
            }
          ]
        },
	...
```

## Examples

You can get more fine grained information by subsetting the object such as in the examples below.

```
const readeasy = require('readeasy')

let text = "Always use a shorter word where possible!"
let readability = readeasy(text)

// The overall readability of the input text
console.log(readability.score)

// The readability of the second paragraph
console.log(readability.paragraphs[1].score)

// The approximate schoolLevel of the third sentence of the first paragraph
console.log(readability.paragraphs[0].sentences[2].schoolLevel)

// The number of syllables of the fourth word of the second sentence of the first paragraph
console.log(readability.paragraphs[0].sentences[1].words[3].syllables)
```
