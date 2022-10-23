const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.use('/', routes)
server.use('/books', routes) // ***edit

module.exports = server
