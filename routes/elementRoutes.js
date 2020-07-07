const router = require("express").Router();
const { Element, User } = require("../models");
const passport = require("passport");
const jwt = require('jsonwebtoken');

router.get("/elements", passport.authenticate("jwt"), (req, res) => {
  Element.find({ user: req.user._id })
    .populate("user")
    .then((elements) => res.json(elements))
    .catch((err) => console.error(err));
});

router.post("/elements", passport.authenticate("jwt"), (req, res) => {
  Element.create({
    type: req.body.type,
    attributes: req.body.attributes,
    user: req.user._id
  })
    .then((element) => {
      User.findByIdAndUpdate(req.user._id, { $push: { elements: element } })
        .then(() =>
          res.json(req.body)
        )
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
});

router.get('/elements/:id', (req, res) => {
  User.findById(req.params.id)
    .populate('elements')
    .then(data => res.json(data))
    .catch(err => console.error(err))
})

router.put('/elements/:id', passport.authenticate("jwt"), (req, res) => {
  Element.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

router.delete("/elements/:id", passport.authenticate("jwt"), (req, res) => {
  Element.findByIdAndDelete(req.params.id, (err) => console.error(err));
});

module.exports = router;
