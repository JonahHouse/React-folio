const { model, Schema } = require('mongoose')

const Page = new Schema({
  title: String,
  Elements: [{
    type: Schema.Types.ObjectId,
    ref: 'Element'
  }],
  images: Array,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model("Page", Page);