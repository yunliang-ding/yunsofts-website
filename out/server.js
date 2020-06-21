const fs = require('fs')
const os = require('os')
const express = require('express')
const proxy = require('http-proxy-middleware')
const app = express()
const prefix = '*'
const port = 80
function getIPAdress() {
  let localIPAddress = "";
  let interfaces = os.networkInterfaces();
  for (let devName in interfaces) {
    let iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        localIPAddress = alias.address;
      }
    }
  }
  return localIPAddress;
}
// 开启静态资源访问
app.use(express.static('./public')) 
// 接口的代理1
app.use('/workbench/*', proxy({
    target: `http://${getIPAdress()}:8001`,
    changeOrigin: true,
    // pathRewrite: { '^/api': '' }
  })
)
// 接口的代理1
app.use('/musicapi/*', proxy({
    target: `http://${getIPAdress()}:8002`,
    changeOrigin: true,
    // pathRewrite: { '^/api': '' }
  })
)
// 项目 prefix
app.get(prefix, (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  res.end(fs.readFileSync('./views/index.html').toString())
})
// 启动服务
app.listen(port, () => {
  console.log('server on 80 port')
})