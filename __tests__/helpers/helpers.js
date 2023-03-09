
const { writeFile, readFile } = require('fs').promises
const { resolve } = require('path')
// import { promises } from 'fs'
// import { resolve } from 'path'

async function renderPage (htmlFile) {
  const PATH = resolve(__dirname, '..', '..', 'pages', htmlFile)
  const RES = await readFile(PATH, 'utf8')
  // console.debug('>>', RES)
  return RES;
}

module.exports = { renderPage }
