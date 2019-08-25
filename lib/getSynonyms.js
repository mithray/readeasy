const packageJson = require('../package.json')
const Configstore = require('configstore')
const config = new Configstore(packageJson.name);
const fetch = require('cross-fetch')
const encodeUrl = require('encodeurl')
const base64 = require('base64-url')
const encode = base64.encode
const decode = base64.decode

async function getSynonyms( search_term, api_name ){
	api_name = encode(api_name)
	let format = "json"
	let search_term_encoded = encodeUrl(search_term)

	let endpoint = decode(config.get(api_name + ".endpoint"))
	let apikey = decode(config.get(api_name + ".apikey"))

	let url = endpoint + '' + format + '/'+ search_term_encoded + '?key=' + apikey

	console.log(url)
	try {
		const res = await fetch(url);
	
		if (res.status >= 400) {
			throw new Error("Bad response from server");
		}
		
		const res_json = await res.json();
																					  
		return res_json

	} catch (err) {
		console.error(err);
	}
	
}

module.exports = getSynonyms
