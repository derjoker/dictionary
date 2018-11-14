const hash = require('object-hash')

module.exports = function extract ($) {
  const word = $('section#block-system-main > h1').text().replace(/\u00AD/g, '')

  const definitions = $('.term-section')
    .toArray()
    .map(section => {
      const parent = $(section.parentNode).clone()
      parent.children('figure').remove()
      parent.children('.term-section').remove()
      let definition = parent.html()

      const child = section.firstChild.next
      const clone = $(section).clone()
      clone.children('h3').remove()

      let examples = []

      // no definition
      if (parent.text().trim() === '') {
        if (clone.find('li').length) {
          examples = clone.find('li').toArray().map(li => $(li).html())
        } else {
          examples = [clone.html()]
        }
      } else {
        if (child) {
          switch (child.name) {
            case 'div':
            case 'p':
              examples = []
              break
            case 'ul':
              examples = $(child)
                .children()
                .toArray()
                .map(li => $.load(li).html())
              break
            default:
              examples = [clone.html()]
              break
          }
        }
      }
      // console.log(definition)
      // console.log(examples)

      return {
        _id: hash(definition),
        definition,
        text: $.load(definition).text(),
        examples: examples.map(example => ({
          _id: hash(example),
          example,
          text: $.load(example).text()
        }))
      }
    })
    .filter(definition => definition.examples.length > 0)

  return {
    word,
    definitions
  }
}
