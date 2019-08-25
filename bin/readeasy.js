#!/usr/bin/env node

const args = process.argv.splice(process.execArgv.length + 2);

const text = args[0];

const readeasy = require('../index.js')
readeasy(text)
	.then( res => {
		console.log(res)
	})
