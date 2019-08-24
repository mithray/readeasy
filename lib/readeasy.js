const readability_meter = require('readability-meter')
const syllable = require('syllable')


function countSyllables(word){
	let syllables = syllable(word)
	return syllables
}

function statWords( sentence ){
	var words = sentence.split(' ')
	var word_stats = []

	for ( let i = 0; i < words.length; i++) {
		let word = {}
		word.text = words[i]

		let syllables = countSyllables(word.text)
		word.syllables = syllables 
	
		word_stats.push(word)
	}

	return word_stats
}

function statSentences( paragraph ){
	var sentences = paragraph.match( /[^\.!\?]+[\.!\?]+/g );
/*
		console.log(sentences)
	console.log(paragraph)
	*/
	var sentence_stats = []
	
	for ( let i = 0; i < sentences.length; i++){
		let text = sentences[i]
		let ease = readability_meter.ease(text)
		let grade = readability_meter.grade(text)

		sentence 				= ease
		sentence.grade	= grade
		sentence.text 	= text.trim()

		sentence.words = statWords(sentence.text)

		sentence_stats.push(sentence)
	}
				
	return sentence_stats
}

function statParagraphs( article ){

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


			paragraph.sentences = statSentences(paragraph.text)
					
			paragraph_stats.push(paragraph)
		}

	}

	return paragraph_stats

}

function readeasy( text ){

	let ease = readability_meter.ease(text)
	let grade = readability_meter.grade(text)
	let paragraphStats = statParagraphs(text)

	let stats = ease
	stats.grade = grade
	stats.paragraphs = paragraphStats

	return stats

}


module.exports = readeasy
