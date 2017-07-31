/**
 * @author monkeywang
 * Date: 17/7/31
 */
let express = require('express')
let app = express()

// 路由文件
let index = require('./routes/index')

app.all('*', (res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})
app.use('/index', index)

app.listen(3000);
console.log('Listening on port 3000...');