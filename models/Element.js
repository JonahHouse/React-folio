const { model, Schema } = require("mongoose");

const Element = new Schema({
  type: String,
  text: String,
  attributes: Object,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Element", Element);