require('dotenv').config()
const express = require('express')
const indexRouter = require('./routes/index')

const app = express()

app.use('/', indexRouter)

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})
