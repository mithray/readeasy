const readeasy = require('./index.js')
const fs = require('fs')

let text1 = "Always use shorter words where possible."
let text2 = `First Paragraph. This is to test the readability of text. Right now it only works for entire blocks of text. Soon I will fix it to divide by sentences so that it can provide hints about specific sentences that need might need simplifying.

This is the text to a second paragraph. This is to test the readability of text. Right now it only works for entire blocks of text. Soon I will fix it to divide by sentences so that it can provide hints about specific sentences that need might need simplifying.`

fs.writeFile('./testfile.json', JSON.stringify(readeasy(text2)), 'utf8',function (err) {
    if (err) {
        return console.log(err);
    }
})

