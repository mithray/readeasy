const readability_meter = require('readability-meter')
const syllable = require('syllable')
const getSynonyms = require('./getSynonyms')

// If a word is longer than this, the program will look up synonyms to suggest.
const syllable_max = 2


function countSyllables(word){
	let syllables = syllable(word)
	return syllables
}

async function statWords( sentence ){
	var words = sentence.split(' ')
	var word_stats = []

	for ( let i = 0; i < words.length; i++) {
		let word = {}
		word.text = words[i]

		let syllables = countSyllables(word.text)
		word.syllables = syllables

		if (word.syllables > syllable_max) {
			console.log('found big word... looking up synonyms')

			await getSynonyms(word.text, 'dictionary.com')
				.then( res => {
					word.synonyms = res 
								console.log(word)
				})
		}
	
		word_stats.push(word)
	}

/*
	*/
	return word_stats
}

async function statSentences( paragraph ){
	var sentences = paragraph.split( /[^\.!\?]+[\.!\?]+/g );
	var sentence_stats = []
	
	for ( let i = 0; i < sentences.length; i++){
		let text = sentences[i]
		let ease = readability_meter.ease(text)
		let grade = readability_meter.grade(text)

		sentence 				= ease
		sentence.grade	= grade
		sentence.text 	= text.trim()

		sentence.words = await statWords(sentence.text)

		sentence_stats.push(sentence)
	}
				
	return sentence_stats
}

async function statParagraphs( article ){

	var paragraphs = article.split('\n')
	var paragraph_stats = []

	for ( let i = 0; i < paragraphs.length; i++) {

		var regex_empty = RegExp('^\s*$')
			
		let text = paragraphs[i]
		let paragraph = {}

		if (regex_empty.test(text)){} 
		else {

			let ease = readability_meter.ease(text)
			let grade = readability_meter.grade(text)

			paragraph 			= ease
			paragraph.grade = grade
			paragraph.text 	= text.trim()


			paragraph.sentences = await statSentences(paragraph.text)
					
			paragraph_stats.push(paragraph)
		}

	}

	return paragraph_stats

}

async function readeasy( text ){

	let ease = readability_meter.ease(text)
	let grade = readability_meter.grade(text)
	let paragraphStats = await statParagraphs(text)

	let stats = ease
	stats.grade = grade
	stats.paragraphs = paragraphStats

	return stats

}

module.exports = readeasy
