require('dotenv').config()

const express = require('express')
const mongoose=require('mongoose')

const workoutRoutes = require('./routes/posts')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/posts', workoutRoutes)

//connect to db

mongoose.connect("mongodb+srv://shreyask:Shrey412@shrey412.hcdj1fc.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 