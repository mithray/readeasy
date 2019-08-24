const readability_meter = require('readability-meter')

function readability(text){
	let readability_obj = readability_meter.ease(text)
	return readability_obj
}


module.exports = readability
