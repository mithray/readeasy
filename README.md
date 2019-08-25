# Readeasy

## Introduction

Please open an issue on Github if you want to ask me more about this. I really would like to know if others like the idea of this package and find it useful. This tests the readability of a text, and will soon also provide suggestions for improvement. It heirarchically calculates the readability of an article of a text as a whole, then separate paragraphs, then sentences, then words. When checking the readability of words it counts the syllables in a word and if the word has more syllables than specificed threshold it looks up the dictionary.com api to check for synonyms that are shorter. 

## Contents

* [Introduction](#introduction)
* [Name](#name)
* [Installation](#installation)
* [Usage](#usage)
* [Understanding](#understanding)
* [Future](#future)

## Name

I searched for a name available on npm, which described the project and was easy enough to remember. Readability was the obvious choice, but that name is taken by the mozilla reading addon. I found that readeasy was available on npm, and thought this was brilliant due to how close it sounds to a [speakeasy](https://en.wikipedia.org/wiki/Speakeasy), which were drinking establishments where individuals were forced to speak softly in order to not offend the authorities with the awful practice of drinking.

Lacking the inordinate reverence for authority, whilst simultaneously admiring both the apt description and the sonorous sound of readeasy, I thought it to be a most appropriate name for this project.

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

```javascript
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

## Future

In the future I plan to 

* Implement syntax parsing using SyntaxNet so that grammatical suggestions can also be made.
* Integrate vocab statistics to get more intelligent data about word usage and make smarter vocabulary suggestions.
* Improve readability metrics.
