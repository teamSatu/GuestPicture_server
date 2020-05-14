const router = require('express').Router()
const userRouter = require('./user')
const roomRouter = require('./room')

router.use('/users', userRouter)
router.use('/rooms', roomRouter)

module.exports = router