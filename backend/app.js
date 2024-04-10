require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const indexRouter = require('./routes/index')

const app = express()
const mongoDB = process.env.MONGO_DB_URI

app.use(express.json())
app.use('/', indexRouter)

main().catch((err) => console.log(err))
async function main() {
  await mongoose.connect(mongoDB)
    .then(() => {
      app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`)
      })
    })
    .catch(error => {
      console.log(error)
    })
}
