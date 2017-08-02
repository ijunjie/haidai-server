/**
 * @author monkeywang
 * Date: 17/7/31
 */
'use strict'
let express = require('express')
let router = express.Router()
let indexController = require('../controllers/indexController')

router.get('/getShopDetail', indexController.getShopDetail)
router.get('/getShopList', indexController.getShopList)
module.exports = router