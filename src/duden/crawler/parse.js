const Crawler = require('crawler')
const { writeFileSync } = require('fs')

const log = 'log'
writeFileSync(log, '')

const duden = 'duden'
writeFileSync(duden, '')

function save (links) {
  console.log(links)
  writeFileSync(duden, links.join('\n') + '\n', { flag: 'a' })
}

function parse (link) {
  const crawler = new Crawler({
    retries: 10,
    callback: function (error, response, done) {
      if (error) {
        console.log(error)
        writeFileSync(log, error + '\n', { flag: 'a' })
      } else if (response.statusCode !== 200) {
        console.log(response)
        parse(link)
      } else {
        const links = response
          .$('div.browse-lexem > div')
          .last()
          .find('ul.browse_lem > li.browse_lem > a')
          .toArray()
          .map(link => link.attribs.href)
        if (links.length > 1) {
          parse(links[links.length - 1])
          save(links.slice(0, -1))
        } else {
          save(links)
          console.log('done!')
        }
      }
      done()
    }
  })
  crawler.queue(link)
}

const start = 'https://www.duden.de/rechtschreibung/a_italienische_Praeposition'
// const start = 'https://www.duden.de/rechtschreibung/3_D_Film'
// const start = 'https://www.duden.de/rechtschreibung/24_Sekunden_Regel' // last
parse(start)
