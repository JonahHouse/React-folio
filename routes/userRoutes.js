const router = require('express').Router();
const { User } = require('../models');
const jwt = require('jsonwebtoken')
const passport = require('passport')

// Login route
router.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

// Register route
router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

module.exports = router;

// Register Route
router.post('/users/register', (req, res) => {
  const { name, email, username } = req.body
  User.register(new User({ name, email, username }), req.body.password, err => {
    if (err) { console.error(err) }
    res.sendStatus(200)
  })
})

// Login Route
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.error(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})