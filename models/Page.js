const { model, Schema } = require('mongoose')

const Page = new Schema({
  title: String,
  components: [{
    type: Schema.Types.ObjectId,
    ref: 'Component'
  }],
  images: Array,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model("Page", Page);