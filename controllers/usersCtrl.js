/**
 * @author monkeywang
 * Date: 17/8/2
 */
let userQuery = require('../models/query/userQuery')
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
  }
}