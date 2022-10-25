const express = require('express')
const { readBook } = require('./functions.js')
const router = express.Router()

router.get('/', (req, res) => {
  readBook()
    .then((books) => {
      res.render('home', books)
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})

router.get('/subjects/:topic', (req, res) => {
  readBook()
    .then((books) => {
      const booksArr = books.books
      const booksData = booksArr.filter((book) =>
        book.subjects.includes(req.params.topic)
      )
      res.render('keywords', { booksData })
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})

router.get('/starsign/:topic', (req, res) => {
  readBook()
    .then((books) => {
      const booksArr = books.books
      const booksData = booksArr.filter((book) =>
        book.starsign.includes(req.params.topic)
      )
      res.render('keywords', { booksData })
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})

router.get('/:id', (req, res) => {
  readBook()
    .then((books) => {
      const booksArr = books.books
      const book = booksArr.find((book) => book.id === Number(req.params.id))
      res.render('details', book)
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
})

///////month

module.exports = router
