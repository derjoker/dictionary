const Crawler = require('crawler')
const fs = require('fs')
const path = require('path')
const uniqueId = require('lodash/uniqueId')

const log = 'downloads.log'
fs.writeFileSync(log, '')

const links = fs
  .readFileSync('duden.log', 'utf-8')
  .trim()
  .split('\n')

const downloads = 'downloads'
if (fs.existsSync(downloads)) {
  fs.readdirSync(downloads).forEach(file => {
    fs.unlinkSync(path.join(downloads, file))
  })
} else fs.mkdirSync(downloads)

function save (name, html) {
  fs.writeFileSync(
    path.join(downloads, name + '.' + uniqueId() + '.html'),
    html
  )
}

const crawler = new Crawler({
  retries: 10,
  callback: function (error, response, done) {
    if (error) {
      console.log(error)
    } else if (response.statusCode !== 200) {
      console.log(response)
      crawler.queue(response.options.uri)
    } else {
      console.log(response.options.uri)
      const s = response.options.uri.trim().split('/')
      save(s[s.length - 1], response.$.html())
    }
    done()
  }
})

crawler.queue(links)
