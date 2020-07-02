const { model, Schema } = require('mongoose')

const User = new Schema({
  username: String,
  password: String,
  name: String,
  email: String,
  elements: [{
    type: Schema.Types.ObjectId,
    ref: 'Element'
  }],
  pages: [{
    type: Schema.Types.ObjectId,
    ref: 'Page'
  }]
})
User.plugin(require('passport-local-mongoose'))
module.exports = model('User', User)
