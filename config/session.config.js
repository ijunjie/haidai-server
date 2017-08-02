/**
 * @author monkeywang
 * Date: 17/8/2
 */
let EXPIRES = 60 * 10 * 1000
let key = 'SESSION_ID'
sessionStore = {}
let sessionConf = {
  checkTiming (req, res) {
    let id = req.cookies['SESSION_ID']
    if (!sessionStore[id] || !sessionStore[id].user) {
      return false;
    }
  },
  getSession: function () {
    let session = {
      sessionId: (new Date()).getTime() + Math.random(),
      cookie: {
        expire: (new Date()).getTime() + EXPIRES
      }
    }
    sessionStore[session.sessionId] = session
    return session
  },
  setSession: function (req, res) {
    let id = req.cookies[key];
    if (!id) {
      req.session = Object.assign(req.session, this.getSession())
    } else {
      let session = sessionStore[id];
      req.session = Object.assign(req.session, session)
      if (session) {
        if (session.cookie.expire > (new Date()).getTime()) {
          // 更新超时时间
          session.cookie.expire = (new Date()).getTime() + EXPIRES;
          req.session.cookie = session.cookie;
        } else {
          // 超时了，删除旧的数据，并重新生成
          delete sessionStore[id]
          req.session = Object.assign(req.session, this.getSession())
        }
      } else {
        // 如果session过期或口令不对，重新生成session
        req.session = Object.assign(req.session, this.getSession())
      }
    }
  }
}
module.exports = sessionConf