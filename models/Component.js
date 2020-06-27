const { model, Schema } = require('mongoose')

const Component = new Schema({
  type: String,
  attributes: [{ type: Object }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

model.exports = model('Component', Component)