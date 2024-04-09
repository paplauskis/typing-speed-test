const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('hi')
})

router.post('/', (req, res) => {
  res.send('posted result')
})

router.get('/pc-rankings', (req, res) => {
  res.send('pc rankings')
})

router.get('/mobile-rankings', (req, res) => {
  res.send('mobile rankings')
})

module.exports = router