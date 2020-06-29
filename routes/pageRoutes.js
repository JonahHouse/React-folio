const router = require('express').Router()
const { Page, User } = require('../models')
const passport = require('passport')

//router.get('/pages', passport.authenticate('jwt'), (req, res) => {
// Page.find()
//   .populate('user')
//   .then(pages => res.json(pages))
//   .catch(err => console.error(err))
// })

router.post('/pages', passport.authenticate('jwt'), (req, res) => {
  Page.create({
    title: req.body.title,
    components: req.body.components,
    images: req.body.images,
    user: req.user._id
  })
    .then(page => {
      User.findByIdAndUpdate(req.user._id, { $push: { pages: page._id } })
        .then(() => res.json({
          title: page.title,
          components: page.components,
          images: page.images,
          user: req.user
        }))
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
})

router.delete('/pages/:id', passport.authenticate('jwt'), (req, res) => {
  Page.deleteOne({ id: req.body.id }, err => console.error(err))
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
