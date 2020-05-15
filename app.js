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

let users = []

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(routes)
app.use(errorHandling)

let image = ``

io.on('connection', (socket) => {
    console.log(`a user connected`)

    socket.on('sendPaintableData', (data) => {
        image = data
        io.emit('returnPaintableData', image)
    })
    socket.on('user-connect', (data) => {
      users.push(data)
      console.log(data, 'user has been conected')
      io.emit('user-connect', users)
    })

    socket.on('user-logout', (data) => {
      users = []
      socket.emit('user-logout', users)
    })
})

server.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))

