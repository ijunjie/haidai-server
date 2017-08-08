/**
 * @author monkeywang
 * Date: 17/8/2
 */
let userQuery = require('../models/query/userQuery')
let common = require('../config/common')
module.exports = {
  login: (req, res, next) => {
    req.getConnection((err, conn)=>{
      if(err) {
        return next(err)
      } else {
        conn.query(userQuery.loginQuery(req.body.username, req.body.password), [], (err, result) => {
          if (err) {
            res.json({
              code: 1,
              msg: err
            })
          } else {
            if (!result.length){
              res.json({code: 1, msg: '用户不存在'})
              return
            }
            sessionStore[req.session.sessionId].user = result[0]
            res.json({
              code: 0,
              msg: 'success',
              data: result[0]
            })
          }
        })
      }
    })
  },
  sign: (req, res, next) => {
    req.getConnection((err, conn)=>{
      if(err) {
        return next(err)
      } else {
        let username = req.body.username
        let password = req.body.password
        let creationTime = (new Date()).getTime()
        let shopId = common.randomString()
        let shopName = common.randomString(10)
        let status = 1
        let result = {
          username,
          shopId,
          shopName,
          creationTime,
          status
        }
        let opt = `'${shopId}','${shopName}','${username}','${password}','${status}',${creationTime}`
        conn.query(userQuery.signQuery(opt), [], (err, result) => {
          if (err) {
            res.json({
              code: 1,
              msg: err
            })
          } else {
            sessionStore[req.session.sessionId].user = result
            res.json({
              code: 0,
              msg: 'success',
              data: result
            })
          }
        })
      }
    })
  }
}