const { resolve } = require('path')
const { readdirSync, readFileSync, writeFileSync } = require('fs')
const { load } = require('cheerio')

const extract = require('./extract')

let DEBUG = false
// DEBUG = true
const path = resolve(__dirname, DEBUG ? 'samples' : 'crawler/downloads')
const files = readdirSync(path)

const log = 'duden.log'
if (!DEBUG) writeFileSync(log, '')

const loader = `load${DEBUG ? '-sample' : ''}.js`

const s = `
db = db.getSiblingDB("dictionary${DEBUG ? '-dev' : ''}");
db.duden.drop();
db.duden.createIndex({
  "word": "text",
  "definitions.definition": "text",
  "definitions.examples.example": "text",
  "definitions.examples.definition": "text"
}, {
  "background": true,
  "name": "_wd_def_ex_"
});
db.duden.insertMany([
`

writeFileSync(loader, s)

files.forEach(file => {
  console.log(file)
  const html = readFileSync(resolve(path, file))
  const $ = load(html)
  try {
    const entry = extract($)
    // console.log(JSON.stringify(entry, null, '  '))
    writeFileSync(loader, JSON.stringify(entry, null, '  ') + ',\n', {
      flag: 'a'
    })
  } catch (error) {
    writeFileSync(log, file + '\n', { flag: 'a' })
    if (DEBUG) throw error
  }
})

writeFileSync(loader, ']);', { flag: 'a' })
