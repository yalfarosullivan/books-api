// Dependencies:
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

// Configuation:
require('dotenv').config()
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

//Middlewear:
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// Index:
app.get('/', (req, res) => {
  res.send('Hello World')
})

// Books: 
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

// Listen
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})