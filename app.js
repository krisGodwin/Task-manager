const express = require('express')
const app = express()

const tasks = require('./router/tasks')

const connectDB = require('./db/connect')

require('dotenv').config()

// middleware
app.use(express.static('./public'))

app.use(express.json())

app.use('/api/v1/tasks', tasks)

  

const PORT = 5000

const start = async () => {
     try {
          await connectDB(process.env.MONGO_URI)
          app.listen(PORT,() => {
               console.log('server lisenining on port 5000')
          })
     } catch (error) {
          console.log(error)
     }
}

start()
