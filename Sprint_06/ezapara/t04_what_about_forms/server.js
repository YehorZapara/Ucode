const http = require('http')
const choice = require('./script')

http.createServer((req, res)=>{
  res.choice()
}).listen(2000)

