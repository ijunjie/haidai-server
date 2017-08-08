/**
 * @author monkeywang
 * Date: 17/8/8
 */
let common = {
  randomString: (len) => {
    len = len || 32
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    let maxPos = $chars.length
    let randomStr = ''
    for (let i = 0; i < len; i++) {
      randomStr += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return randomStr
  }
}
module.exports = common