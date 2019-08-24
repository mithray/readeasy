const readability_meter = require('readability-meter')
const syllable = require('syllable')


function countSyllables(word){
	let syllables = syllable(word)
	return syllables
}

function statWords( article ){
	var words = article.split(' ')
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

function readeasy(text){

	let ease = readability_meter.ease(text)
	let grade = readability_meter.grade(text)
	let wordStats = statWords(text)

	stats = ease
	stats.grade
	stats.words = wordStats

	return ease

}


module.exports = readeasy
