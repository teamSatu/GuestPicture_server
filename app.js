const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(router)

app.listen(port, ()=> {
  console.log("This app listen to port ", port)
})