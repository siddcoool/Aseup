const express = require('express')
const userRouter = express.Router()

userRouter.get('/', async (req, res)=>{
    res.json({message:"hello user"})
})

module.exports = userRouter