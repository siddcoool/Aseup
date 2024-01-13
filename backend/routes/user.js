const express = require('express')
const userRouter = express.Router()
const User = require('../models/User.js')

userRouter.get('/', async (req, res)=>{
    await User.create
    res.json({message:"hello user"})
})



module.exports = userRouter