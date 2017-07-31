/**
 * @author monkeywang
 * Date: 17/7/31
 */
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
}