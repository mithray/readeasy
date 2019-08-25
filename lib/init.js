const Configstore = require('configstore')
const packageJson = require('../package.json')
const inquirer = require('inquirer')
const base64 = require('base64-url')
const encode = base64.encode
const decode = base64.decode

const config = new Configstore(packageJson.name);


console.log(escape('dictionary.com'))

const apis = {
	"dictionary.com": {
		"domain": "dictionary.com",
		"endpoint": "https://dictionaryapi.com/api/v3/references/thesaurus/",
		"apikey": ""
	},
	"bighugelabs.com": {
		"domain": "bighugelabs.com",
		"endpoint": "https://words.bighugelabs.com/api/2", 
		"apikey": ""
	}
}

function setKey(api){
	if (config.has(encode(api.domain))){} 
	else {
		var answers = inquirer
		  .prompt([
			  {
					type: 'password',
					message: `Enter your ${api.domain} API key`,
					name: 'apikey',
				}
			])
		  .then( answers => {
				let domain = encode(api.domain)
				let endpoint = encode(api.endpoint)
				let apikey = encode(answers.apikey)
				config.set(domain + '.domain', domain)
				config.set(domain + '.endpoint', endpoint)
				config.set(domain + '.apikey', apikey)
				return answers
			})
	}
	return answers
}

async function setKeys(){
	var apilist = Object.keys(apis)
	for ( let i = 0; i < apilist.length; i++ ) {
		let apiname = apilist[i]
		let api = apis[apiname]
		let res = await setKey(api)
	}
}

setKeys()
