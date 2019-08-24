const readability_meter = require('readability-meter')

function readeasy(text){
	let readeasy_obj = readability_meter.ease(text)
	return readeasy_obj
}


module.exports = readeasy
