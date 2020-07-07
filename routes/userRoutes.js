const router = require('express').Router()
const { User } = require('../models')
const jwt = require('jsonwebtoken')
const passport = require('passport')

// Register Route
router.post('/users/register', (req, res) => {
  const { name, email, username } = req.body
  User.register(new User({ name, email, username }), req.body.password, err => {
    if (err) { console.error(err) }
    res.json(req.body)
  })
})

// Login Route
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.error(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})

router.get('/users/:username', passport.authenticate('jwt'), (req, res) => {
  User.find({ username: req.params.username })
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

// router.get('/users/:username', passport.authenticate('jwt'), (req, res) => {
//   Page.find()
//     .populate('user')
//     .then(pages => res.json(pages))
//     .catch(err => console.error(err))
// })

router.get('/users/pages', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user)
})

router.get('/users/authorize', passport.authenticate('jwt'), (req, res) => {
  res.sendStatus(200)
})

module.exports = router
