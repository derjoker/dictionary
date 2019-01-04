const hash = require('object-hash')
const flatten = require('lodash/flatten')

module.exports = function extract ($) {
  const word = $('section#block-system-main > h1')
    .text()
    .replace(/\u00AD/g, '')
  const stem = word.split(',')[0]

  function parse (node) {
    let examples = []
    if (node.find('h3:contains("Beispiel")').length) {
      let spans = []
      const span = node.children('span').toArray()
      spans = spans.concat(span)
      const li = node.find('ul > li').toArray()
      spans = spans.concat(li)
      examples = examples.concat(
        spans.map(span => ({
          example: $(span)
            .text()
            .trim()
        }))
      )
    }
    if (node.find('h3:contains("Wendungen")').length) {
      const spans = node
        .find('span.iwtext')
        .toArray()
        .map(iwtext => {
          const example = $(iwtext).parent()
          example.find('h3').remove()
          return {
            example: example.text().trim()
          }
        })
      examples = examples.concat(spans)
    }
    return examples.map(example => {
      example._id = hash(example)
      return example
    })
  }

  // Bedeutungsübersicht -> Bedeutungen, Beispiele und Wendungen
  const section = $('h2:contains("Bedeutungsübersicht")').parents('section')
  const div = section
    .find('div.entry')
    .toArray()
    .map(entry => {
      $(entry)
        .find('figure')
        .remove()
      const examples = $(entry)
        .find('.term-section')
        .remove()
        .toArray()
        .map(example => parse($(example)))
      return {
        definition: $(entry)
          .text()
          .trim(),
        examples: flatten(examples)
      }
    })
  const ol = section
    .find('ol > li > a')
    .toArray()
    .map(a => {
      const definition = $(a)
        .text()
        .trim()
      const href = $(a).attr('href')
      const examples = $(href)
        .find('.term-section')
        .toArray()
        .map(example => parse($(example)))
      return { definition, examples: flatten(examples) }
    })
  const definitions = div.concat(ol).map(definition => {
    definition._id = hash(definition)
    return definition
  })

  return {
    word,
    stem,
    definitions
  }
}
