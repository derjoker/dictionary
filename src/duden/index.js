const { resolve } = require('path')
const { readdirSync, readFileSync, writeFileSync } = require('fs')
const { load } = require('cheerio')

const extract = require('./extract')

let DEBUG = false
// DEBUG = true
const path = resolve(__dirname, DEBUG ? 'samples' : 'downloads')
const files = readdirSync(path)

const log = 'duden.log'
if (!DEBUG) writeFileSync(log, '')

const loader = 'load.js'
writeFileSync(
  loader,
  'db = db.getSiblingDB("dictionary");\n' +
    'db.duden.drop();\n' +
    'db.duden.insertMany([\n'
)

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
    // throw error
  }
})

writeFileSync(loader, ']);', { flag: 'a' })
