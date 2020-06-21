const fs = require('fs')
const express = require('express')
const app = express()
const prefix = '*'
const port = 80
// 开启静态资源访问
app.use(express.static('./public')) 
// 项目 prefix
app.get(prefix, (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
  res.end(fs.readFileSync('./views/index.html').toString())
})
// 启动服务
app.listen(port, () => {
  console.log('server on 80 port')
})