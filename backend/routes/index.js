const express = require('express')
const resultController = require('../controllers/resultController')

const router = express.Router()

router.get('/', resultController.home_get)

router.post('/', resultController.home_create_result_post)

router.get('/pc-rankings', resultController.pc_rankings_get)

router.get('/mobile-rankings', resultController.mobile_rankings_get)

module.exports = router
