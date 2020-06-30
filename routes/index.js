const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./pageRoutes.js'))
router.use('/api', require('./elementRoutes.js'))

module.exports = router
