/**
 * @author monkeywang
 * Date: 17/8/2
 */
'use strict'
let express = require('express');
let router = express.Router();
let usersCtrl = require('../controllers/usersCtrl')

router.post('/login', usersCtrl.login)

module.exports = router