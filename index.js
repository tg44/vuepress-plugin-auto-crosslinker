module.exports = (options, ctx) => ({
  extendMarkdown: md => {
    const autoCrosslinker = require('markdown-it-auto-crosslinker')
    md.use(autoCrosslinker, options)
  }
})
