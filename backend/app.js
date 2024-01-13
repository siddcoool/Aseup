const express = require('express')
const app = express()
const port = 5000
const userRouter = require('./routes/user')
const fs = require('fs');
const cors = require('cors')
const morgan = require('morgan')
// require('./config/database')



app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})