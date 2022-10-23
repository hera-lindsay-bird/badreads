const fsPromises = require('node:fs/promises')

function readBook() {
  return fsPromises
    .readFile('./books.json', 'utf-8')
    .then((books) => JSON.parse(books))
}

module.exports = { readBook }
