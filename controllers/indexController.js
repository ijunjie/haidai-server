/**
 * @author monkeywang
 * Date: 17/7/31
 */
let shopQuery = require('../models/query/shopQuery')
let sessionConf = require('../config/session.config')
module.exports = {
  getShopDetail: (req, res, next) => {
    res.json({
      data:{
        shopId: '010123'
      },
      code : 0,
      msg  : 'success'
    })
  },
  getShopList: (req, res, next) => {
    if (!sessionConf.checkTiming(req, res)) {
      res.json({code: 1, msg: '用户未登录'})
      return
    }
    req.getConnection((err, conn)=>{
      if(err) {
        return next(err)
      } else {
        conn.query(shopQuery.getShopList(), [], (err, result) => {
          if (err) {
            res.json({
              code: 1,
              msg: err
            })
          } else {
            res.json({
              code: 0,
              msg: 'success',
              data: {
                result
              }
            })
          }
        })
      }
    })
  }
}