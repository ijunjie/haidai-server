/**
 * @author monkeywang
 * Date: 17/7/31
 */
let shopQuery = require('../models/query/shopQuery')
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