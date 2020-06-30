const router = require("express").Router();
const { Element, User } = require("../models");
const passport = require("passport");

router.get("/elements", passport.authenticate("jwt"), (req, res) => {
  Element.find()
    .populate("user")
    .then((elements) => res.json(elements))
    .catch((err) => console.error(err));
});

router.post("/elements", passport.authenticate("jwt"), (req, res) => {
  Element.create({
    user: req.user._id,
    text: req.body.body,
  });
  .then(element => {
    User.findByIdAndUpdate(req.user._id, { $push: { elements: element._id }
      .then(() => res.json({
        text: element.text,
        user: req.user
      }))
      .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
  })
});

router.delete("/elements/:id", passport.authenticate("jwt"), (req, res) => {
  Element.delete({ id: req.body.id }, (err) => console.error(err));
});

module.exports = router;
