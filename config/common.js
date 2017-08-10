/**
 * @author monkeywang
 * Date: 17/8/8
 */
let crypto = require('crypto')
let common = {
  /**
   * 生成随机字符串
   * @param len
   * @returns {string}
   */
  secret: 'monkeyWang',
  randomString: (len) => {
    len = len || 32
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    let maxPos = $chars.length
    let randomStr = ''
    for (let i = 0; i < len; i++) {
      randomStr += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return randomStr
  },
  /**
   * @aes192加密模块
   * @param str string 要加密的字符串
   * @param secret string 要使用的加密密钥(要记住,不然就解不了密啦)
   * @retrun string 加密后的字符串
   * */
  getEncAse192: (str, secret) => {
    let cipher = crypto.createCipher("aes192", secret) // 设置加密类型 和 要使用的加密密钥
    let enc = cipher.update(str, "utf8", "hex")    // 编码方式从utf-8转为hex
    enc += cipher.final("hex") // 编码方式从转为hex
    return enc // 返回加密后的字符串
  },
  /**
   * @aes192解密模块
   * @param str string 要解密的字符串
   * @param secret string 要使用的解密密钥(要和密码的加密密钥对应,不然就解不了密啦)
   * @retrun string 解密后的字符串
   * */
  getDecAse192: (str, secret) => {
    let decipher = crypto.createDecipher("aes192", secret)
    let dec = decipher.update(str, "hex", "utf8")// 编码方式从hex转为utf-8
    dec += decipher.final("utf8")// 编码方式从utf-8
    return dec
  }
}
module.exports = common