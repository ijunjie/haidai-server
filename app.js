/**
 * @author monkeywang
 * Date: 17/7/31
 */
let express = require('express')
let app = express()
let mysql = require('mysql')
let myConnection = require('express-myconnection')
let dbOptions = require('./models/config')
let cookieParser = require('cookie-parser')
let session = require('express-session')
let sessionConf = require('./config/session.config')
let bodyParser = require('body-parser')
// 路由文件
let index = require('./routes/index')
let users = require('./routes/users')

app.use(cookieParser())
app.use(session({
  resave: true, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'love'
}))
app.use(myConnection(mysql, dbOptions, 'single'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

let sessionStore = {}

app.all('*', function(req, res, next) {
  sessionConf.setSession(req, res, sessionStore)
  res.cookie('SESSION_ID', req.session.sessionId, {maxAge:600000, httpOnly:true})
  res.header("Access-Control-Allow-Origin", req.headers.origin) //需要显示设置来源
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
  res.header("Access-Control-Allow-Credentials",true); //带cookies
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})

app.use('/index', index)
app.use('/users', users)

app.listen(3000)
console.log('Listening on port 3000...')