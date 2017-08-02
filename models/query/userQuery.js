/**
 * @author monkeywang
 * Date: 17/8/2
 */
let shopQuery = {
  loginQuery: (username, pwd) => {
    return `select username,shopName,status,mobile,address,email from shop where username='${username}' and password='${pwd}'`
  }
}
module.exports = shopQuery