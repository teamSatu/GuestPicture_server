if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}
require('dotenv').config()
const express= require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes')
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)
const cors = require('cors')
const errorHandling = require('./middlewares/errorHandling.js')

io.on('connect', function(socket){
  console.log('User Connected')
})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(routes)
app.use(errorHandling)

server.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))

