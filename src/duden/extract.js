const hash = require('object-hash')

module.exports = function extract ($) {
  function parseExample (el) {
    const clone = $(el).clone()
    const example = $(el).find('.iwtext').text().trim()
    clone.children('.iwtext').remove()
    const definition = clone.text().trim()

    return {
      example,
      definition
    }
  }

  const word = $('section#block-system-main > h1').text().replace(/\u00AD/g, '')
  const stem = word.split(',')[0]

  const definitions = $('.term-section')
    .toArray()
    .map(section => {
      const parent = $(section.parentNode).clone()
      parent.children('figure').remove()
      parent.children('.term-section').remove()
      let definition = parent.text().trim()

      const child = section.firstChild.next
      const clone = $(section).clone()
      clone.children('h3').remove()

      let examples = []

      // no definition
      if (definition === '') {
        if (clone.find('li').length) {
          examples = clone.find('li').toArray().map(li => parseExample(li))
        } else {
          examples = [parseExample(clone)]
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
                .map(li => ({ example: $.load(li).text().trim() }))
              break
            default:
              examples = [{ example: clone.text().trim() }]
              break
          }
        }
      }

      const entry = {
        definition,
        examples: examples.map(example => {
          example._id = hash(example)
          return example
        })
      }
      entry._id = hash(entry)

      return entry
    })
    .filter(definition => definition.examples.length > 0)

  return {
    word,
    stem,
    definitions
  }
}
