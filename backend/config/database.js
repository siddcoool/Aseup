const mongoose = require('mongoose')
require('dotenv').config()
const mongoURL = process.env.MONGODB_URL

mongoose.connect(mongoURL, {useNewUrlParser : true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Connected to MongoDB')
    })
    .catch((err)=>{
    })