# Vuepress Plugin auto-crosslinker

[![npm](https://img.shields.io/npm/v/vuepress-plugin-auto-crosslinker)](https://www.npmjs.com/package/vuepress-plugin-auto-crosslinker)

This is a vuepress plugin wrapper around [markdown-it-auto-crosslinker](https://github.com/tg44/markdown-it-auto-crosslinker)!

## Installation

```bash
npm i vuepress-plugin-auto-crosslinker -D
```

## Usage

```js
plugins: {
    'auto-crosslinker': { /* options */ }
},
```

Note that Vuepress allows multiple syntaxes to register plugins. See [Vuepress documentation on how to use a plugin](https://vuepress.vuejs.org/plugin/using-a-plugin.html) for more information.

## What it does?
Wiki like pages, usually cross-links to each other.
A good (wiki) page only links to another page at the first occurrence.
So if you have a wiki about fruits, when you mention apple in a page at first time,
you want to link it to the corresponding page, but any more mentions should not appear as a link.

We can create a dictionary about where we want to link, and for what appearances we want to change links.

The plugin will get the links one-by-one, and change the first keyword in a document to a link. For every document.

No more missing links, everything is automatically cross-linked to each other!

## Options
### `dictionary`
**Default:** `{}`

An object where the key is the link, and the value is a key-word list.
```js
const dictionary = {
  '/apple.md': ['apple', 'apples'],
  '/pear.md': ['pear', 'pears'],
  '/fruit.md': ['fruit', 'fruits'],
}
```

### `wholeWords`
**Default:** `true`

Match to whole words.
```js
const dictionary = {'/berry.md': ['berry']}

md
  .use(crosslinker, {dictionary, wholeWords: true})
  .render('Test raspberry is a berry?')
//the same as 
md
  .render('Test raspberry is a [berry](/berry.md)?')

md
  .use(crosslinker, {dictionary, wholeWords: false})
  .render('Test raspberry is a berry?')
//the same as 
md
  .render('Test rasp[berry](/berry.md) is a berry?')
```
