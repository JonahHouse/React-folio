const router = require('express').Router()

router.use('/api', require('./UserRoutes.js'))
router.use('/api', require('./PageRoutes.js'))

module.exports = router
