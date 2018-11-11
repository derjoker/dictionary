const { resolve } = require('path')
const { readdirSync, readFileSync } = require('fs')
const { load } = require('cheerio')

const extract = require('./extract')

const path = resolve(__dirname, 'downloads')
const files = readdirSync(path)

files.forEach(file => {
  const html = readFileSync(resolve(path, file))
  const $ = load(html)
  const entry = extract($)
  console.log(entry.word)
})
